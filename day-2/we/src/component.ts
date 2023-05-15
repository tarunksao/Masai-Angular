let Component = function (config: any) {
    return function (TargetClass: any) {
        let tc = new TargetClass();
        return class {
            title: string = tc.title;
            power: number = config.power;
            selector: string = config.selector;
            template: string = config.template;
        }
    }
};

@Component({
    power: 100,
    selector: 'app-root',
    template: `
        <div>
            <h2>{(title)}</h2>
            <ui>
                <l1>List Item 1</l1>
                <l1>List Item 2</l1>
                <l1>List Item 3</l1>
            </ui>
        </div>
    `
})
class MyComp {
    title: string = 'Welcome to your life';
}