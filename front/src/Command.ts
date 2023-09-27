import { Config } from "./interfaces/Config";
import { getKeys, querySelector } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  private callback: Callback = () => {};
  private config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  constructor() {
    this.render();
    this.setActions();
  }

  onUpdate(callback: Callback) {
    this.callback = callback;
  }

  render() {
    const keys = getKeys(this.config);
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

  setActions() {
    const keys: (keyof Config)[] = ["samples", "multiplicationFactor"];
    for (const key of keys) {
      const slider = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      slider.addEventListener("input", () => {
        const newConfig: Config = { ...this.config, [key]: +slider.value };
        this.setConfig(newConfig);
      });
    }
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
    this.callback(this.config);
  }
}
