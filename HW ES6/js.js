class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement("div");
        document.body.appendChild(div);
        // div.style.height = this.height + "px";
        // div.style.width = this.width + "px";
        // div.style.background = this.bg;
        // div.style.fontSize = this.fontSize;
        // div.style.textAlign = this.textAlign;
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        div.style.cssText = param;
    }
}

let newDiv = new Options(200, 500, "red", 20, "center");
newDiv.createDiv();
let div = document.querySelector("div");
div.textContent = "Hello";