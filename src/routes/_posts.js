import fs from "fs";
import path from "path";
import marked from "marked";
import katex from "katex";
import { attr } from "svelte/internal";

export function getPosts() {
  const slugs = fs
    .readdirSync("posts")
    .filter((file) => path.extname(file) === ".md")
    .map((file) => file.slice(0, -3));

  return slugs.map(getPost).sort((a, b) => {
    return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
  });
}

export function getPost(slug) {
  const file = `posts/${slug}.md`;
  if (!fs.existsSync(file)) return null;

  const markdown = fs.readFileSync(file, "utf-8");
  
  const { content, metadata } = process_markdown(markdown);
  
  const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
  metadata.dateString = date.toDateString();
  
  // Replace with link to HTML
  if (metadata.link) {
    slug = metadata.link;
  } else {
    const html_markdown = marked.parse(content);
    var html = process_latex(html_markdown);

    // Include bibliography and sort out citations
    if (metadata.bibliography) {
      const reference_regex = /\[@(?<key>\w*)\]/gu;
      const bib = fs.readFileSync(`static/${metadata.bibliography}`, "utf-8");
      const dict = process_bibtex(bib);
      const ref_list = [];
      // Extract references
      var m = "";
      while ((m = reference_regex.exec(html))) {
        const ref_key = m.groups.key;
        if (ref_list.indexOf(ref_key) == -1) {
          ref_list.push(ref_key);
        }
        const index = ref_list.length - 1;
        html = html.replace(
          new RegExp(`@${ref_key}`, 'gu'),
          `<a href="${slug}/#${index}">${index + 1}</a>`
        );
      }
      // Build bibliography
      html += "<h2>References</h2><ol class='references'>";
      for (const key in ref_list) {
        const entry = dict[ref_list[key]];
        const journal =
          entry["journal"] ||
          entry["booktitle"] ||
          entry["publisher"] ||
          entry["url"];
        // Entry HTML
        var entry_html = `${entry["author"]}: <i>${entry["title"]}</i>, ${entry["year"]}, ${journal}`;
        // Entry URL (if present)
        if ("url" in entry) {
          entry_html = `<a href="${entry["url"]}">${entry_html}</a>`;
        } else if ("doi" in entry) {
          entry_html = `<a href="https://doi.org/${entry["doi"]}">${entry_html}</a>`;
        }

        // Entry li
        entry_html = `<li id="${key}">${entry_html}</li>`;
        html += entry_html;
      }
      html += "</ol>";
    }
  }

  return {
    slug,
    metadata,
    html,
  };
}

function process_bibtex(bibtex) {
  const bib_regex = /^\s*@\w+\{.*?^\}/gms;
  const key_regex = /@(\w+)\{(\w*),/u;
  const entry_regex = /\s*(\n?\s*(?<key>\w*)\s*=\s*{(?<value>[^}]*))/gm;
  const matches = bibtex.match(bib_regex);
  const dict = {};
  for (const idx in matches) {
    const key_match = key_regex.exec(matches[idx]);
    const entry_dict = {};
    if (key_match) {
      const key = key_match[2];
      var string = matches[idx];
      var m = "";
      while ((m = entry_regex.exec(string))) {
        entry_dict[m.groups.key] = m.groups.value;
      }
      dict[key] = entry_dict;
    }
  }
  return dict;
}

function process_markdown(markdown) {
  const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
  const frontMatter = match[1];
  const content = markdown.slice(match[0].length);

  const metadata = {};
  frontMatter.split("\n").forEach((pair) => {
    const colonIndex = pair.indexOf(":");
    metadata[pair.slice(0, colonIndex).trim()] = pair
      .slice(colonIndex + 1)
      .trim();
  });

  return { metadata, content };
}

function process_latex(html) {
  const toLatex = (match, g1) => {
    return katex.renderToString(g1);
  };
  const regexp = /\$+(.*[^\$])\$+/g;
  return html.replace(regexp, toLatex);
}
