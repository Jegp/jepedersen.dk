{
  description = "Hugo with Sass Flake";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells = {
          default = pkgs.mkShell {
            buildInputs = [ pkgs.git pkgs.go pkgs.hugo ];
            shellHook = ''
              echo "Starting Hugo development server..."
              hugo server -D
            '';
          };
          slidev = pkgs.mkShell {
            buildInputs = [ pkgs.nodejs_24 pkgs.chromium ];
            shellHook = ''
              cd static
              if [ ! -d node_modules ]; then
                echo "Installing dependencies..."
                npm install
              fi

              # Playwright's bundled Chromium is a prebuilt FHS binary that can't
              # find its shared libraries on NixOS, so slidev export crashes.
              # Point exports at the Nix-provided Chromium instead, and give the
              # heavier full browser more time to load the /print page.
              export SLIDEV_CHROMIUM="$(command -v chromium)"
              slidev-export() {
                npx slidev export --executable-path "$SLIDEV_CHROMIUM" --timeout 120000 "$@"
              }

              echo ""
              echo "Slidev presentation shell (static/)"
              echo "  Dev:    npx slidev <folder>/slides.md"
              echo "  Build:  npx slidev build <folder>/slides.md"
              echo "  Export: slidev-export --format=pptx <folder>/slides.md"
              echo ""
            '';
          };
        };
      });
}