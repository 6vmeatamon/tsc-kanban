export function bound(_originalMethod, context) {
    context.addInitializer(function () {
        this[context.name] = this[context.name].bind(this);
    });
}
