export default function () {
    const handlers = {};
    return {
        // directive definition
        bind(el, binding) {
            const {value: handleClick} = binding;

            if (typeof (handleClick) !== 'function') {
                throw new Error('The click-away directive expects a function/method as an argument.');
            }

            if (!el.id) {
                throw new Error('The click-away directive requires the element it is bound to to have an id.');
            }

            const handler = (e) => {
                if (!(el.contains(e.target))) {
                    handleClick();
                }
            };

            handlers[el.id] = handler;

            document.addEventListener('click', handler);
            document.addEventListener('touchstart', handler);
        },
        unbind(el) {
            document.removeEventListener('click', handlers[el.id]);
            document.removeEventListener('touchstart', handlers[el.id]);
            delete handlers[el.id];
        },
    }
}
