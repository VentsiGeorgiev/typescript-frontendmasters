import fetch from "node-fetch";

class SelectorResult {
  #elements;

  constructor(elements: NodeListOf<Element>) {
    this.#elements = elements;
  }

  html(contents: string) {
    this.#elements.forEach((elem) => {
      elem.innerHTML = contents;
    });
  }
  on<K extends keyof HTMLElementEventMap>(
    eventName: K,
    arg1: (event: HTMLElementEventMap[K]) => void,
  ) {
    const button: HTMLButtonElement = {} as any;
    button.addEventListener(eventName, arg1);
  }
}

function $(selector: string) {
  return new SelectorResult(document.querySelectorAll(selector));
}

namespace $ {
  export function ajax(...args: any[]): any {
    return {} as any;
  }
}

export default $;

$("button.continue").html("Next step..");
