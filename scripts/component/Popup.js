class Popup {
  constructor(props) {
    this.popupProps = props;
    this.root = null;

    this.initDOM();
  }

  initDOM() {
    this.root = $.fancybox;

    _.mapKeys(this.popupProps,(value, key) => {
      this.root.defaults[key] = value;
    });
  }

  show(htmlContent) {
    this.root.open(htmlContent);
  }

  close() {
    this.root.close();
  }
}