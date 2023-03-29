export default class TabSwitch {
  private trigger: NodeListOf<HTMLElement>
  private selectedClass: string
  private activeClass: string

  constructor(trigger: string) {
    this.trigger = document.querySelectorAll(trigger)
    this.selectedClass = "is-active"
    this.activeClass = "is-show"
  }

  public init(): void {
    this.trigger.forEach(v => {
      let current = 0
      const tabList = v.querySelectorAll('.js-tab-switch__list')
      const tabContent = v.querySelectorAll('.js-tab-switch__content')
      tabList.forEach((v, index) => {
        console.log(tabContent)
        v.addEventListener('click', () => {
          if(index === current) {
            return
          } else {
            tabList[current].classList.remove(this.selectedClass)
            tabContent[current].classList.remove(this.activeClass)
            tabList[index].classList.add(this.selectedClass)
            tabContent[index].classList.add(this.activeClass)
            current = index
          }
        })
      })
    })
  }
}