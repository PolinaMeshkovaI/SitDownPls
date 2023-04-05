import tippy, {roundArrow} from 'tippy.js';

export const tooltip = () => {
  tippy('#myButton', {
    content: "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
    placement: 'top',
    arrow: true,
    theme: 'translucent',
    maxWidth: 210,
  });
}
