class Popup {
  constructor(props) {
    this.popupProps = props;//custom popup options
    this.root = null;

    this.initDOM();
  }

  initDOM() {
    this.root = $.fancybox;
  }

  show(htmlContent) {
    this.root.open(htmlContent, this.popupProps);
  }

  close() {
    this.root.close();
  }
}