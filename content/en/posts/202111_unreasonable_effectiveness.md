---
title: The unreasonable effectiveness of deep learning
date: 2021-11-20
featured_image: img/deep_net.png
bibliography: bib.bib
---


The search for building and understanding *intelligent machines* has
been under way for thousands of years and appear fundamental to the
human condition [@Russel_Norvig_2010]. Deep learning models have
recently been heavily dominating this search for artificial intelligence
(AI), as demonstrated by the go-playing Alpha Go [@Silver2017], the
narrating GPT-3 [@Brown2020], and many more. This is an odd development
for many since computational graphs are old news, and because no
ground-breaking heureka moment has guided the development. Rather, deep
learning is guided by a primitive brute-force optimization mechanism.

Why is it that deep learning and deep neural networks have become so
popular despite their simplicity? If there is no theoretical foundation
to build on, why are they so *unreasonably* efficient?

In this essay, I will argue the answer is: part coincidence, part skill.
Motivating the skillfulness, I will first define deep learning (DL) and
attempt to explain the phenomenon from a first-principle's approach. In
this light, I will describe the "coincidental" part by revisiting sets
of problems DL is particularly good at, so we can finally arrive at an
answer to our question: why are deep networks so useful?

# Deep Learning

Even though many DL proponents promote its similarities to the human
brain, the building block of deep networks have little to do with
nervous systems. Deep networks can be roughly defined as large
computational graphs with weighted nonlinearities.

This [@Carson_1925] is [@Shannon1942] not [@Rosenblatt_1958] new
[@Rumelhart_Hinton_Williams_1986].

In fact, eerily similar approaches was attempted throughout 1960-1990,
with little success. What makes deep networks interesting, though, is
that they can approximate *any function* to *any desired degree of
approximation* [@Hornik_Stinchcombe_White_1989]. This striking fact was
discovered in 1986 and tells us that deep networks can solve *any*
problem, *if* they are big enough. Granted, that is a big *if*, and this
has largely been driving the explosive growth of the graphics processing
units (GPUs) market: the bigger network, the better approximations.

It still took several decades before the idea of a universal function
approximator could be used to solve problems with any form of practical
relevance. Theoretically, this was already solved in 1986,
where @Rumelhart_Hinton_Williams_1986
showed that large nets could be "trained" by *searching* for optimal
configurations in a sea of possibilities. However, it was not until the
early 2000's that sufficiently powerful hardware came along to build and
search through massive deep networks now up to *hundreds of trillions*
of parameters [@Brown2020].

<figure>
<img src="/img/cat.png"/>
<p class="caption">
Figure 1. Two possible classification task based on the same cat picture: 
object identification (top) and masking out pixels belonging to the cat (bottom).
</p>
</figure>

# Deep Learning first principles

It may come as a surprise how this type of searching yields meaningful
networks. Fortunately, physicists and mathematicians helped resolve
parts of the conundrum with two ancient ideas: symmetry
[@Gens_Domingos_2014] and equivariance [@Cohen_Welling_2016].

It turns out that symmetry is a useful property during learning. If you
are to, say, identify a cat in an image, it should not matter how big
the cat is. Or where in the picture the cat is. In other words, we
want to find a way to learn a way to look at cats that are *symmetric*
under scale (size) or translation (location in picture). This symmetry
is normally called *invariance*, because the idea that a cat is in the
picture *does not vary* if the cat is very large and dead-center, or 
really small in the lower left corner. We identify cats independently
from those *distortions*, $\xi$.

We can write this down more precisely by looking at some images
$x \in \mathbb{I}$
that we are looking to classify into a binary decision
$y \in \mathbb{C}: \\{\text{CAT}, \neg\text{CAT}\\}$ using
a network $f: \mathbb{I} \mapsto \mathbb{C}$, we can therefore say that
the guess *without* a distortion $\xi: \mathbb{I} \mapsto \mathbb{I}$,
should be the same *with* the distortion: $$f(x) = f(\xi (x))$$

We can take this one step further by generalizing the invariance, so
that the networks can operate on distorted images, *while retaining the
distortion* [@Cohen_Welling_2016]. Imagine for a while, that we are no
longer identifying cats, but colouring them, as shown in Figure 1. In
that case, invariance will not do because we need to *include the
distortion in the output*. Relating this to the example of the cat, we
cannot always think that the cat is in the center of the image and
colour its outline there. Rather, we need to correctly scale and
translate the outline in the output image, that is, we need to *preserve
the structure* of the distortion. 
When we want to mask our cat (as in Figure 1), our *structure preserving*
network should be written as $f: \mathbb{I} \mapsto \mathbb{I}$ and 
fulfill<a href="#footnote-1" class="footnote-a">1</a>: $$\xi(f(x)) = f(\xi(x))$$

Our network is now a *structure preserving map*, also known as <i><a href="https://en.wikipedia.org/wiki/Equivariant_map">equivariant maps</a></i>.
They are fundamental to, for instance, topology and graph theory.

# Suitable problems for Deep Learning

It has been shown that deep networks are particularly good at preserving
symmetry and structures [@Cohen_Welling_2016; @Gens_Domingos_2014]. This
kind of preservation allows for the detection of symmetries and
structures, but also the *mapping* of symmetries and structures between
domains such as image, 3d-space, language, audio and many others
[@Bronstein_Bruna_Cohen_Velickovic_2021].

This is obviously relevant for classifying and masking cats, but what about
everything else "AI"? What about other types of
intelligence like bodily intelligences, causal reasoning (what is the
*source* of the structure), abstract thinking, and so on? Is that all a
matter of preserving mapping? 
Maybe. We do not know [@Saxe_Nelli_Summerfield_2021]. Please find out.

<figure>
<img src="/img/ai_pop.png" style="width: 80%;"/>
<p class="caption">
Popularity of the search terms "deep learning" and "artificial
intelligence" on Google Trends [@Google2021]. The Y-axis expresses
relative popularity where 100 indicates the peak number of
searchers.
</p>
</figure>

# Why did Deep Learning become so popular?

Returning to the idea of a universal function approximator, these
networks are precisely exercising the approximation of domain mappings.
They find appropriate responses such as "CAT", a colouring mask, or even
a synthesized voice command. Pause here for a second and imagine how
many problems can be solved this way. Is language a mapping of concepts
to voice or text [@Brown2020]? Is programming a mapping of concepts to
code [@Tiwang_Oladunni_Xu_2019]?

By now, the reader is hopefully convinced of the usefulness of the
approach. And plenty of evidence exists in applications for speech
synthesis, self-driving cars, facial recognition, object detection, 
[fake blob opera](https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw), etc.
This is the coincidence: pioneers of the abovementioned principles could
not possibly have known the extend to which their findings would
generalize.

Figure 2 plots the relative popularity of two search terms: "artificial
intelligence" and "deep learning" [@Google2021]. It appears the general
public lost interest in "classical" AI in the beginning of the 00's only
to slowly move towards deep learning-driven AI in the mid 10's.
Interestingly enough, this coincides with the first papers on
invariances and structure preservations in 2014/15.

It would be presumptuous to exclude other factors, and the advent of
commercialized hardware that unlocks the training of large deep nets, is
certainly one such influence. But the fundamental properties we have
discussed here, are not only interesting because they explain what is
feasible, they also hint at what is *not*. Perhaps that is why deep
learning is losing popularity towards the end of 2020?

<div class="footnotes">
[ <b id="footnote-1">1</b> ]: This is also known as *equivariance* and the formula is slightly
    more involved, since the distortion in the input domain may be
    different from the distortion in the codomain. See
    [@Bronstein_Bruna_Cohen_Velickovic_2021] for a more detailed
    treatment.

</div>

## Bibliography

```
@article{Flexner1939,
  title  = {[ http://matrixcookbook.com ]},
  pages  = {72},
  author = {Petersen, Kaare Brandt and Pedersen, Michael Syskind},
  langid = {english},
  file   = {Petersen und Pedersen - [ httpmatrixcookbook.com ].pdf:/home/jens/Zotero/storage/QLVRWX6Z/Petersen und Pedersen - [ httpmatrixcookbook.com ].pdf:application/pdf}
}
 @article{Baez_Stay_2009,
  title        = {Physics, Topology, Logic and Computation: A Rosetta Stone},
  url          = {http://arxiv.org/abs/0903.0340},
  abstractnote = {In physics, Feynman diagrams are used to reason about quantum processes. In the 1980s, it became clear that underlying these diagrams is a powerful analogy between quantum physics and topology: namely, a linear operator behaves very much like a “cobordism”. Similar diagrams can be used to reason about logic, where they represent proofs, and computation, where they represent programs. With the rise of interest in quantum cryptography and quantum computation, it became clear that there is extensive network of analogies between physics, topology, logic and computation. In this expository paper, we make some of these analogies precise using the concept of “closed symmetric monoidal category”. We assume no prior knowledge of category theory, proof theory or computer science.},
  note         = {arXiv: 0903.0340},
  journal      = {arXiv:0903.0340 [quant-ph]},
  author       = {Baez, John C. and Stay, Mike},
  year         = {2009},
  month        = {Jun}
}

 @article{Cardone_Hindley,
  title   = {History of Lambda-calculus and Combinatory Logic},
  author  = {Cardone, Felice and Hindley, J Roger},
  pages   = {95},
  year    = {2006},
  journal = {Handbook of the History of Logic},
  volume  = {5}
}
@article{Church1932,
  author  = {Church, A.},
  journal = {Annals of Mathematics},
  number  = {2},
  title   = {A Set of Postulates for the Foundation of Logic},
  volume  = {33},
  year    = {1932}
}
 @book{Pierce_2002,
  place        = {Cambridge, MA, USA},
  title        = {Types and Programming Languages},
  isbn         = {978-0-262-16209-8},
  abstractnote = {A comprehensive introduction to type systems and programming languages.},
  publisher    = {MIT Press},
  author       = {Pierce, Benjamin C.},
  year         = {2002},
  month        = {Jan}
}
@article{Schonfinkel1924,
  author    = {Schönfinkel, M.},
  year      = {1924},
  title     = {On the building blocks of mathematical logic},
  journal   = {J. van Heijenoort, From Frege to Gödel. A Source Book in Mathematical Logic},
  publisher = {Cambridge, MA: Harvard University Press, 1967},
  pages     = {355–366}
}
 @article{Turing_1937,
  title   = {On Computable Numbers, with an Application to the Entscheidungsproblem},
  volume  = {s2-42},
  issn    = {1460-244X},
  doi     = {10.1112/plms/s2-42.1.230},
  number  = {1},
  journal = {Proceedings of the London Mathematical Society},
  author  = {Turing, A. M.},
  year    = {1937},
  pages   = {230–265}
}
 @inbook{Martin-Löf_1975,
  series       = {Logic Colloquium ’73},
  title        = {An Intuitionistic Theory of Types: Predicative Part},
  volume       = {80},
  url          = {https://www.sciencedirect.com/science/article/pii/S0049237X08719451},
  doi          = {10.1016/S0049-237X(08)71945-1},
  abstractnote = {The theory of types is intended to be a full-scale system for formalizing intuitionistic mathematics as developed. The language of the theory is richer than the languages of traditional intuitionistic systems in permitting proofs to appear as parts of propositions so that the propositions of the theory can express properties of proofs. There are axioms for universes that link the generation of objects and types and play somewhat the same role for the present theory as does the replacement axiom for Zermelo–Fraenkel set theory. The present theory is based on a strongly impredicative axiom that there is a type of all types in symbols. This axiom has to be abandoned, however, after it has been shown to lead to a contraction. This chapter discusses Normalization theorem, which can be strengthened in two ways: it can be made to cover open terms and it can be proved that every reduction sequence starting from an arbitrary term leads to a unique normal term after a finite number of steps. The definition of the notion of convertibility and the proof that an arbitrary term is convertible can no longer be separated because the type symbols and the terms are generated simultaneously.},
  booktitle    = {Studies in Logic and the Foundations of Mathematics},
  publisher    = {Elsevier},
  author       = {Martin-Löf, Per},
  editor       = {Rose, H. E. and Shepherdson, J. C.},
  year         = {1975},
  month        = {Jan},
  pages        = {73–118},
  collection   = {Logic Colloquium ’73}
}

 @book{Girard_1987,
  title  = {Linear logic},
  url    = {https://www.sciencedirect.com/science/article/pii/0304397587900454?via%3Dihub},
  author = {Girard, Jean-Yves},
  year   = {1987}
}

 @article{Bernardy_Boespflug_Newton_Jones_Spiwack_2018,
  title        = {Linear Haskell: practical linearity in a higher-order polymorphic language},
  volume       = {2},
  issn         = {2475-1421},
  doi          = {10.1145/3158093},
  abstractnote = {Linear type systems have a long and storied history, but not a clear path forward to integrate with existing languages such as OCaml or Haskell. In this paper, we study a linear type system designed with two crucial properties in mind: backwards-compatibility and code reuse across linear and non-linear users of a library. Only then can the benefits of linear types permeate conventional functional programming. Rather than bifurcate types into linear and non-linear counterparts, we instead attach linearity to function arrows. Linear functions can receive inputs from linearly-bound values, but can also operate over unrestricted, regular values. To demonstrate the efficacy of our linear type system - both how easy it can be integrated in an existing language implementation and how streamlined it makes it to write programs with linear types - we implemented our type system in GHC, the leading Haskell compiler, and demonstrate two kinds of applications of linear types: mutable data with pure interfaces; and enforcing protocols in I/O-performing functions.},
  note         = {arXiv: 1710.09756},
  number       = {POPL},
  journal      = {Proceedings of the ACM on Programming Languages},
  author       = {Bernardy, Jean-Philippe and Boespflug, Mathieu and Newton, Ryan R. and Jones, Simon Peyton and Spiwack, Arnaud},
  year         = {2018},
  month        = {Jan},
  pages        = {1–29}
}

@book{SEP-DH,
  year      = {2019},
  title     = {Hilbert’s Program},
  publisher = {Stanford Encyclopedia of Philosophy},
  month     = {May},
  url       = {https://plato.stanford.edu/entries/hilbert-program/}
}

@book{SEP-GIT,
  year      = {2020},
  title     = {Gödel's Incompleteness Theorems},
  publisher = {Stanford Encyclopedia of Philosophy},
  month     = {Apr},
  url       = {https://plato.stanford.edu/entries/goedel-incompleteness/}
}

@book{SEP-CL,
  title     = {Combinatorial Logic},
  year      = {2020},
  publisher = {Stanford Encyclopedia of Philosophy},
  month     = {Nov},
  url       = {https://plato.stanford.edu/entries/logic-combinatory/}
}
@book{SEP-LC,
  title     = {Lambda Calculus},
  year      = {2018},
  publisher = {Stanford Encyclopedia of Philosophy},
  month     = {Mar},
  url       = {https://plato.stanford.edu/entries/lambda-calculus/}
}
 @book{Dawkins_Davis_2017,
  title        = {The Selfish Gene},
  isbn         = {978-1-912281-25-1},
  url          = {https://www.taylorfrancis.com/books/mono/10.4324/9781912281251/selfish-gene-richard-dawkins-nicola-davis},
  doi          = {10.4324/9781912281251},
  abstractnote = {Richard Dawkins provides excellent examples of his reasoning and interpretation skills in The Selfish Gene. His 1976 book is not a work of original research, but instead a careful explanation of evolution, combined with an argument for a particular interpretation of several aspects of evolution. Since Dawkins is building on other researchers’ work and writing for a general audience, the central elements of good reasoning are vital to his book: producing a clear argument and presenting a persuasive case; organising an argument and supporting its conclusions. In doing this, Dawkins also employs the crucial skill of interpretation: understanding what evidence means; clarifying terms; questioning definitions; giving clear definitions on which to build arguments. The strength of his reasoning and interpretative skills played a key part in the widespread acceptance of his argument for a gene-centred interpretation of natural selection and evolution – and in its history as a bestselling classic of science writing.},
  publisher    = {Macat Library},
  author       = {Dawkins, Richard and Davis, Nicola},
  year         = {2017},
  month        = {Jul}
}
 @book{Wittgenstein_1922,
  place     = {London},
  title     = {Tractatus Logico-Philosophicus},
  publisher = {Routledge & Kegan Paul},
  author    = {Wittgenstein, Ludwig},
  year      = {1922}
}
 @book{Dennett_2017,
  title     = {From Bacteria to Bach and Back: The Evolution of Minds},
  isbn      = {978-0-393-24208-9},
  note      = {Google-Books-ID: PEp8DAAAQBAJ},
  publisher = {W. W. Norton \& Company},
  author    = {Dennett, Daniel C.},
  year      = {2017},
  month     = {Feb}
}

 @misc{Dijkgraaf_2021,
  title        = {The Uselessness of Useful Knowledge},
  url          = {https://www.quantamagazine.org/science-has-entered-a-new-era-of-alchemy-good-20211020/},
  abstractnote = {Today’s powerful but little-understood artificial intelligence breakthroughs echo past examples of unexpected scientific progress.},
  journal      = {Quanta Magazine},
  author       = {Dijkgraaf, Robbert},
  year         = {2021},
  month        = {Oct}
}

 @misc{Weinstein,
  title        = {Eric Weinstein on Wikipedia},
  url          = {https://en.wikipedia.org/wiki/Eric_Weinstein},
  howpublished = {Wikipedia},
  year         = {2021},
  notes        = {Retrieved November 2021}
}

 @misc{Weinstein2020,
  title        = {The Academic Hunger Games Have to Stop!},
  url          = {https://www.youtube.com/watch?v=QdzlQDghqHU},
  year         = {2021},
  howpublished = {YouTube}
}
 @article{Larsen_vonIns_2010,
  title        = {The rate of growth in scientific publication and the decline in coverage provided by Science Citation Index},
  volume       = {84},
  issn         = {1588-2861},
  doi          = {10.1007/s11192-010-0202-z},
  abstractnote = {The growth rate of scientific publication has been studied from 1907 to 2007 using available data from a number of literature databases, including Science Citation Index (SCI) and Social Sciences Citation Index (SSCI). Traditional scientific publishing, that is publication in peer-reviewed journals, is still increasing although there are big differences between fields. There are no indications that the growth rate has decreased in the last 50 years. At the same time publication using new channels, for example conference proceedings, open archives and home pages, is growing fast. The growth rate for SCI up to 2007 is smaller than for comparable databases. This means that SCI was covering a decreasing part of the traditional scientific literature. There are also clear indications that the coverage by SCI is especially low in some of the scientific areas with the highest growth rate, including computer science and engineering sciences. The role of conference proceedings, open access archives and publications published on the net is increasing, especially in scientific fields with high growth rates, but this has only partially been reflected in the databases. The new publication channels challenge the use of the big databases in measurements of scientific productivity or output and of the growth rate of science. Because of the declining coverage and this challenge it is problematic that SCI has been used and is used as the dominant source for science indicators based on publication and citation numbers. The limited data available for social sciences show that the growth rate in SSCI was remarkably low and indicate that the coverage by SSCI was declining over time. National Science Indicators from Thomson Reuters is based solely on SCI, SSCI and Arts and Humanities Citation Index (AHCI). Therefore the declining coverage of the citation databases problematizes the use of this source.},
  number       = {3},
  journal      = {Scientometrics},
  author       = {Larsen, Peder Olesen and von Ins, Markus},
  year         = {2010},
  month        = {Sep},
  pages        = {575–603}
}

@misc{Google2021,
  author       = {Google},
  howpublished = {https://trends.google.com/trends/explore?date=all \&q=deep\%20learning,artificial\%20intelligence},
  title        = {Google Trends},
  year         = {2021},
  note         = {Exported on 2021/11/18}
}
 @book{Russel_Norvig_2010,
  title     = {Artificial Intelligence: A Modern Approach, 4th US ed.},
  url       = {http://aima.cs.berkeley.edu/},
  publisher = {Pearson},
  author    = {Russel, Stuart and Norvig, Peter},
  year      = {2010}
}

 @article{Silver2017,
  title   = {Mastering the game of Go without human knowledge},
  volume  = {550},
  issn    = {1476-4687},
  doi     = {10.1038/nature24270},
  number  = {7676},
  journal = {Nature},
  author  = {Silver, David and Schrittwieser, Julian and Simonyan, Karen and Antonoglou, Ioannis and Huang, Aja and Guez, Arthur and Hubert, Thomas and Baker, Lucas and Lai, Matthew and Bolton, Adrian and Chen, Yutian and Lillicrap, Timothy and Hui, Fan and Sifre, Laurent and van den Driessche, George and Graepel, Thore and Hassabis, Demis},
  year    = {2017},
  month   = {Oct},
  pages   = {354–359}
}

 @article{Brown2020,
  title   = {Language Models are Few-Shot Learners},
  url     = {http://arxiv.org/abs/2005.14165},
  note    = {arXiv: 2005.14165},
  journal = {arXiv:2005.14165 [cs]},
  author  = {Brown, Tom B. and Mann, Benjamin and Ryder, Nick and Subbiah, Melanie and Kaplan, Jared and Dhariwal, Prafulla and Neelakantan, Arvind and Shyam, Pranav and Sastry, Girish and Askell, Amanda and Agarwal, Sandhini and Herbert-Voss, Ariel and Krueger, Gretchen and Henighan, Tom and Child, Rewon and Ramesh, Aditya and Ziegler, Daniel M. and Wu, Jeffrey and Winter, Clemens and Hesse, Christopher and Chen, Mark and Sigler, Eric and Litwin, Mateusz and Gray, Scott and Chess, Benjamin and Clark, Jack and Berner, Christopher and McCandlish, Sam and Radford, Alec and Sutskever, Ilya and Amodei, Dario},
  year    = {2020},
  month   = {May}
}

 @article{Carson_1925,
  title        = {Electric circuit theory and the operational calculus},
  volume       = {4},
  issn         = {0005-8580},
  doi          = {10.1002/j.1538-7305.1925.tb03972.x},
  abstractnote = {Note: This is the first of three installments by Mr. Carson which will embody material given by him in a course of lectures at the Moore School of Electrical Engineering, University of Pennsylvania, May, 1925. No effort has been spared by the author to make his treatment clear and as simple as the subject matter will permit. The method of presentation is distinctively pedagogic. To electrical engineers and to engineering instructors, this exposition of the fundamentals of electric circuit theory and the operational calculus should be of great value. — Editor.},
  number       = {4},
  journal      = {The Bell System Technical Journal},
  author       = {Carson, John R.},
  year         = {1925},
  month        = {Oct},
  pages        = {685–761}
}
@inbook{Shannon1942,
  chapter      = {The Theory and Design of Linear Differential Equation Machines},
  url          = {https://ieeexplore.ieee.org/document/5311556},
  doi          = {10.1109/9780470544242.ch33},
  abstractnote = {This chapter contains sections titled: Introduction Machines without Integrators Machines with Integrators Theory of Orientation Sufficient Gearing for an Ungeared Machine Integrators as Gears with Complex Ratio Reversible Machines Interconnections of Two-Shaft Machines The Analysis Theorem Degeneracy Test and Evaluation of the Machine Determinant The Duality Theorems Minimal Design Theory Designs for the General Rational Function General Design Method Appendix. Proofs of Theorems and Additional Remarks Bibliography},
  title        = {Claude E. Shannon: Collected Papers},
  author       = {Claude E. Shannon},
  publisher    = {IEEE},
  year         = {1993},
  pages        = {514–559}
}
 @article{Rosenblatt_1958,
  place        = {US},
  title        = {The perceptron: A probabilistic model for information storage and organization in the brain},
  volume       = {65},
  issn         = {1939-1471},
  doi          = {10.1037/h0042519},
  abstractnote = {To answer the questions of how information about the physical world is sensed, in what form is information remembered, and how does information retained in memory influence recognition and behavior, a theory is developed for a hypothetical nervous system called a perceptron. The theory serves as a bridge between biophysics and psychology. It is possible to predict learning curves from neurological variables and vice versa. The quantitative statistical approach is fruitful in the understanding of the organization of cognitive systems. 18 references. (PsycINFO Database Record (c) 2016 APA, all rights reserved)},
  number       = {6},
  journal      = {Psychological Review},
  publisher    = {American Psychological Association},
  author       = {Rosenblatt, F.},
  year         = {1958},
  pages        = {386–408}
}

 @article{Rumelhart_Hinton_Williams_1986,
  title        = {Learning representations by back-propagating errors},
  doi          = {10.1038/323533a0},
  abstractnote = {Back-propagation repeatedly adjusts the weights of the connections in the network so as to minimize a measure of the difference between the actual output vector of the net and the desired output vector, which helps to represent important features of the task domain. We describe a new learning procedure, back-propagation, for networks of neurone-like units. The procedure repeatedly adjusts the weights of the connections in the network so as to minimize a measure of the difference between the actual output vector of the net and the desired output vector. As a result of the weight adjustments, internal ‘hidden’ units which are not part of the input or output come to represent important features of the task domain, and the regularities in the task are captured by the interactions of these units. The ability to create useful new features distinguishes back-propagation from earlier, simpler methods such as the perceptron-convergence procedure1.},
  journal      = {Nature},
  author       = {Rumelhart, D. and Hinton, Geoffrey E. and Williams, Ronald J.},
  year         = {1986}
}

 @article{Hornik_Stinchcombe_White_1989,
  title        = {Multilayer feedforward networks are universal approximators},
  volume       = {2},
  issn         = {08936080},
  doi          = {10.1016/0893-6080(89)90020-8},
  abstractnote = {This paper rigorously establishes thut standard rnultiluyer feedforward networks with as f&v us one hidden layer using arbitrary squashing functions ure capable of upproximating uny Bore1 measurable function from one finite dimensional space to another to any desired degree of uccuracy, provided sujficirntly muny hidden units are available. In this sense, multilayer feedforward networks are u class of universul rlpproximators.},
  number       = {5},
  journal      = {Neural Networks},
  author       = {Hornik, Kurt and Stinchcombe, Maxwell and White, Halbert},
  year         = {1989},
  month        = {Jan},
  pages        = {359–366}
} 
@article{Cohen_Welling_2016,
  title        = {Group Equivariant Convolutional Networks},
  url          = {http://arxiv.org/abs/1602.07576},
  abstractnote = {We introduce Group equivariant Convolutional Neural Networks (G-CNNs), a natural generalization of convolutional neural networks that reduces sample complexity by exploiting symmetries. G-CNNs use G-convolutions, a new type of layer that enjoys a substantially higher degree of weight sharing than regular convolution layers. G-convolutions increase the expressive capacity of the network without increasing the number of parameters. Group convolution layers are easy to use and can be implemented with negligible computational overhead for discrete groups generated by translations, reﬂections and rotations. G-CNNs achieve state of the art results on CIFAR10 and rotated MNIST.},
  note         = {arXiv: 1602.07576},
  journal      = {arXiv:1602.07576 [cs, stat]},
  author       = {Cohen, Taco S. and Welling, Max},
  year         = {2016},
  month        = {Jun}
}

 @inproceedings{Gens_Domingos_2014,
  title     = {Deep Symmetry Networks},
  volume    = {27},
  url       = {https://papers.nips.cc/paper/2014/hash/f9be311e65d81a9ad8150a60844bb94c-Abstract.html},
  booktitle = {Advances in Neural Information Processing Systems},
  publisher = {Curran Associates, Inc.},
  author    = {Gens, Robert and Domingos, Pedro M},
  year      = {2014}
}
 @article{Bronstein_Bruna_Cohen_Velickovic_2021,
  title   = {Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges},
  url     = {http://arxiv.org/abs/2104.13478},
  journal = {arXiv:2104.13478 [cs, stat]},
  author  = {Bronstein, Michael M. and Bruna, Joan and Cohen, Taco and Veličković, Petar},
  year    = {2021},
  month   = {May}
}
 @article{Saxe_Nelli_Summerfield_2021,
  title   = {If deep learning is the answer, what is the question?},
  volume  = {22},
  issn    = {1471-0048},
  doi     = {10.1038/s41583-020-00395-8},
  number  = {1},
  journal = {Nature Reviews Neuroscience},
  author  = {Saxe, Andrew and Nelli, Stephanie and Summerfield, Christopher},
  year    = {2021},
  month   = {Jan},
  pages   = {55–67}
}
 @article{Fukushima_1980,
  title   = {Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position},
  volume  = {36},
  issn    = {0340-1200, 1432-0770},
  doi     = {10.1007/BF00344251},
  number  = {4},
  journal = {Biological Cybernetics},
  author  = {Fukushima, Kunihiko},
  year    = {1980},
  month   = {Apr},
  pages   = {193–202}
}

 @inproceedings{Tiwang_Oladunni_Xu_2019,
  title     = {A Deep Learning Model for Source Code Generation},
  doi       = {10.1109/SoutheastCon42311.2019.9020360},
  booktitle = {2019 SoutheastCon},
  author    = {Tiwang, Raymond and Oladunni, Timothy and Xu, Weifeng},
  year      = {2019},
  month     = {Apr},
  pages     = {1–7}
}

@article{lacoste2019quantifying,
  title   = {Quantifying the Carbon Emissions of Machine Learning},
  author  = {Lacoste, Alexandre and Luccioni, Alexandra and Schmidt, Victor and Dandres, Thomas},
  journal = {arXiv preprint arXiv:1910.09700},
  year    = {2019}
}

@misc{UN2021,
  title = {Envision2030: 17 goals to transform the world for persons with disabilities},
  year  = {2021},
  url   = {https://www.un.org/development/desa/disabilities/envision2030.html}
}
@misc{Forbes2020,
  title  = {Deep Learning's Carbon Emission Problem},
  author = {Rob Toews},
  year   = {2020},
  url    = {https://www.forbes.com/sites/robtoews/2020/06/17/deep-learnings-climate-change-problem/}
}
 @article{Vries_Stoll_2021,
  title        = {Bitcoin’s growing e-waste problem},
  volume       = {175},
  issn         = {0921-3449},
  doi          = {https://doi.org/10.1016/j.resconrec.2021.105901},
  abstractnote = {Bitcoin’s increasing energy consumption has triggered a passionate debate about the sustainability of the digital currency. And yet, most studies have thus far ignored that Bitcoin miners cycle through a growing amount of short-lived hardware that could exacerbate the growth in global electronic waste. E-waste represents a growing threat to our environment, from toxic chemicals and heavy metals leaching into soils, to air and water pollutions caused by improper recycling. Here we present a methodology to estimate Bitcoin’s e-waste and find that it adds up to 30.7 metric kilotons annually, per May 2021. This number is comparable to the amount of small IT and telecommunication equipment waste produced by a country like the Netherlands. At peak Bitcoin price levels seen early in 2021, the annual amount of e-waste may grow beyond 64.4 metric kilotons in the midterm, which highlights the dynamic trend if the Bitcoin price rises further. Moreover, the demand for mining hardware already today disrupts the global semiconductor supply chain. The strategies we present may help to mitigate Bitcoin’s growing e-waste problem.},
  journal      = {Resources, Conservation and Recycling},
  author       = {Vries, Alex de and Stoll, Christian},
  year         = {2021},
  pages        = {105901}
}
 @article{Schwartz_Dodge_Smith_Etzioni_2019,
  title        = {Green AI},
  url          = {http://arxiv.org/abs/1907.10597},
  abstractnote = {The computations required for deep learning research have been doubling every few months, resulting in an estimated 300,000x increase from 2012 to 2018 [2]. These computations have a surprisingly large carbon footprint [40]. Ironically, deep learning was inspired by the human brain, which is remarkably energy efﬁcient. Moreover, the ﬁnancial cost of the computations can make it difﬁcult for academics, students, and researchers, in particular those from emerging economies, to engage in deep learning research.},
  note         = {arXiv: 1907.10597},
  journal      = {arXiv:1907.10597 [cs, stat]},
  author       = {Schwartz, Roy and Dodge, Jesse and Smith, Noah A. and Etzioni, Oren},
  year         = {2019},
  month        = {Aug}
}
@article{2020Dhar,
  title   = {The carbon impact of artificial intelligence},
  year    = 2020,
  volume  = 2,
  pages   = {423-425},
  author  = {Payal Dahr},
  journal = {Nat Mach Intell}
}
 @article{Mead_1990,
  title        = {Neuromorphic electronic systems},
  volume       = {78},
  issn         = {1558-2256},
  doi          = {10.1109/5.58356},
  abstractnote = {It is shown that for many problems, particularly those in which the input data are ill-conditioned and the computation can be specified in a relative manner, biological solutions are many orders of magnitude more effective than those using digital methods. This advantage can be attributed principally to the use of elementary physical phenomena as computational primitives, and to the representation of information by the relative values of analog signals rather than by the absolute values of digital signals. This approach requires adaptive techniques to mitigate the effects of component differences. This kind of adaptation leads naturally to systems that learn about their environment. Large-scale adaptive analog systems are more robust to component degradation and failure than are more conventional systems, and they use far less power. For this reason, adaptive analog technology can be expected to utilize the full potential of wafer-scale silicon fabrication.<>},
  number       = {10},
  journal      = {Proceedings of the IEEE},
  author       = {Mead, C.},
  year         = {1990},
  month        = {Oct},
  pages        = {1629–1636}
}
 @article{Furber_Galluppi_Temple_Plana_2014,
  title        = {The SpiNNaker Project},
  volume       = {102},
  issn         = {1558-2256},
  doi          = {10.1109/JPROC.2014.2304638},
  abstractnote = {The spiking neural network architecture (SpiNNaker) project aims to deliver a massively parallel million-core computer whose interconnect architecture is inspired by the connectivity characteristics of the mammalian brain, and which is suited to the modeling of large-scale spiking neural networks in biological real time. Specifically, the interconnect allows the transmission of a very large number of very small data packets, each conveying explicitly the source, and implicitly the time, of a single neural action potential or “spike.” In this paper, we review the current state of the project, which has already delivered systems with up to 2500 processors, and present the real-time event-driven programming model that supports flexible access to the resources of the machine and has enabled its use by a wide range of collaborators around the world.},
  number       = {5},
  journal      = {Proceedings of the IEEE},
  author       = {Furber, Steve B. and Galluppi, Francesco and Temple, Steve and Plana, Luis A.},
  year         = {2014},
  month        = {May},
  pages        = {652–665}
}
 @article{Schemmel_Billaudelle_Dauer_Weis_2020,
  title        = {Accelerated Analog Neuromorphic Computing},
  url          = {http://arxiv.org/abs/2003.11996},
  abstractnote = {This paper presents the concepts behind the BrainScales (BSS) accelerated analog neuromorphic computing architecture. It describes the second-generation BrainScales-2 (BSS-2) version and its most recent in-silico realization, the HICANN-X Application Specific Integrated Circuit (ASIC), as it has been developed as part of the neuromorphic computing activities within the European Human Brain Project (HBP). While the first generation is implemented in an 180nm process, the second generation uses 65nm technology. This allows the integration of a digital plasticity processing unit, a highly-parallel micro processor specially built for the computational needs of learning in an accelerated analog neuromorphic systems. The presented architecture is based upon a continuous-time, analog, physical model implementation of neurons and synapses, resembling an analog neuromorphic accelerator attached to build-in digital compute cores. While the analog part emulates the spike-based dynamics of the neural network in continuous-time, the latter simulates biological processes happening on a slower time-scale, like structural and parameter changes. Compared to biological time-scales, the emulation is highly accelerated, i.e. all time-constants are several orders of magnitude smaller than in biology. Programmable ion channel emulation and inter-compartmental conductances allow the modeling of nonlinear dendrites, back-propagating action-potentials as well as NMDA and Calcium plateau potentials. To extend the usability of the analog accelerator, it also supports vector-matrix multiplication. Thereby, BSS-2 supports inference of deep convolutional networks as well as local-learning with complex ensembles of spiking neurons within the same substrate.},
  note         = {arXiv: 2003.11996},
  journal      = {arXiv:2003.11996 [cond-mat, q-bio]},
  author       = {Schemmel, Johannes and Billaudelle, Sebastian and Dauer, Phillip and Weis, Johannes},
  year         = {2020},
  month        = {Mar}
}
 @article{Zhu_Zhang_Yang_Huang_2020,
  title        = {A comprehensive review on emerging artificial neuromorphic devices},
  volume       = {7},
  doi          = {10.1063/1.5118217},
  abstractnote = {The rapid development of information technology has led to urgent requirements for high efficiency and ultralow power consumption. In the past few decades, neuromorphic computing has drawn extensive attention due to its promising capability in processing massive data with extremely low power consumption. Here, we offer a comprehensive review on emerging artificial neuromorphic devices and their applications. In light of the inner physical processes, we classify the devices into nine major categories and discuss their respective strengths and weaknesses. We will show that anion/cation migration-based memristive devices, phase change, and spintronic synapses have been quite mature and possess excellent stability as a memory device, yet they still suffer from challenges in weight updating linearity and symmetry. Meanwhile, the recently developed electrolyte-gated synaptic transistors have demonstrated outstanding energy efficiency, linearity, and symmetry, but their stability and scalability still need to be optimized. Other emerging synaptic structures, such as ferroelectric, metal–insulator transition based, photonic, and purely electronic devices also have limitations in some aspects, therefore leading to the need for further developing high-performance synaptic devices. Additional efforts are also demanded to enhance the functionality of artificial neurons while maintaining a relatively low cost in area and power, and it will be of significance to explore the intrinsic neuronal stochasticity in computing and optimize their driving capability, etc. Finally, by looking into the correlations between the operation mechanisms, material systems, device structures, and performance, we provide clues to future material selections, device designs, and integrations for artificial synapses and neurons.},
  number       = {1},
  journal      = {Applied Physics Reviews},
  publisher    = {American Institute of Physics},
  author       = {Zhu, Jiadi and Zhang, Teng and Yang, Yuchao and Huang, Ru},
  year         = {2020},
  month        = {Feb},
  pages        = {011312}
}
 @article{Jo_Chang_Ebong_Bhadviya_Mazumder_Lu_2010,
  title        = {Nanoscale memristor device as synapse in neuromorphic systems},
  volume       = {10},
  issn         = {1530-6992},
  doi          = {10.1021/nl904092h},
  abstractnote = {A memristor is a two-terminal electronic device whose conductance can be precisely modulated by charge or flux through it. Here we experimentally demonstrate a nanoscale silicon-based memristor device and show that a hybrid system composed of complementary metal-oxide semiconductor neurons and memristor synapses can support important synaptic functions such as spike timing dependent plasticity. Using memristors as synapses in neuromorphic circuits can potentially offer both high connectivity and high density required for efficient computing.},
  number       = {4},
  journal      = {Nano Letters},
  author       = {Jo, Sung Hyun and Chang, Ting and Ebong, Idongesit and Bhadviya, Bhavitavya B. and Mazumder, Pinaki and Lu, Wei},
  year         = {2010},
  month        = {Apr},
  pages        = {1297–1301}
}
 @article{Pehle_Wetterich_2020,
  title        = {Neuromorphic quantum computing},
  url          = {http://arxiv.org/abs/2005.01533},
  abstractnote = {We propose that neuromorphic computing can perform quantum operations. Spiking neurons in the active or silent states are connected to the two states of Ising spins. A quantum density matrix is constructed from the expectation values and correlations of the Ising spins. As a step towards quantum computation we show for a two qubit system that quantum gates can be learned as a change of parameters for neural network dynamics.},
  note         = {arXiv: 2005.01533},
  journal      = {arXiv:2005.01533 [cond-mat, physics:quant-ph]},
  author       = {Pehle, Christian and Wetterich, Christof},
  year         = {2020},
  month        = {May}
}
@article{Fedorov2018QuantumCP,
  title   = {Quantum computers put blockchain security at risk},
  author  = {Aleksey K. Fedorov and Evgeniy O. Kiktenko and A. I. Lvovsky},
  journal = {Nature},
  year    = {2018},
  volume  = {563},
  pages   = {465-467}
}
```