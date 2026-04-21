
help:
	@echo "Usage:"
	@echo "  make run       - Run the development server"
	@echo "  make install   - Install dependencies"
	@echo "  make build     - Build the application for production"

run:
	npm run dev

install:
	npm install

build:
	npm run build
