export default class Accordion {
  private title: NodeListOf<HTMLElement>;
  private activeClassName: string;
  private openClassName: string;

  constructor(_title: string) {
    this.title = document.querySelectorAll(_title);
    this.activeClassName = "is-active";
    this.openClassName = "is-open";
  }

  public init(): void {
    for (let i = 0; i < this.title.length; i++) {
      let titleEach = this.title[i];
      let content = titleEach.nextElementSibling as HTMLElement;
      titleEach.addEventListener("click", () => {
        titleEach.classList.toggle(this.activeClassName);
        content.classList.toggle(this.openClassName);
      });
    }
  }
}
