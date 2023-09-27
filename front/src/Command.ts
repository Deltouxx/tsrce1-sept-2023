import { Config } from "./interfaces/Config";
import { querySelector } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  private callback: Callback = () => {};
  private config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  constructor() {
    this.render();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  render() {
    const keys: (keyof Config)[] = ["samples", "multiplicationFactor"];
    for (const key of keys) {
      const elt = querySelector(`div.command label.${key} .value`);
      elt.innerHTML = this.config[key] + "";
      const slider = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      slider.value = this.config[key] + "";
    }
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }
}
