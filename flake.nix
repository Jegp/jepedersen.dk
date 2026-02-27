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
            buildInputs = [ pkgs.nodejs_22 ];
            shellHook = ''
              cd static/slides
              if [ ! -d node_modules ]; then
                echo "Installing dependencies..."
                npm install
              fi
              echo ""
              echo "Slidev presentation shell (static/slides/)"
              echo "  Dev:   npx slidev <folder>/slides.md"
              echo "  Build: npx slidev build <folder>/slides.md"
              echo ""
            '';
          };
        };
      });
}