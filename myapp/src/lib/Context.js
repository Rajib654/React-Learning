class Contex {
    constructor(value) {
        this.value = value;
    }
    //Provider
    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    }
    //Consumer
    Consumer = ({ children }) => children(this.value);
}

function createContex(value = null) {
    const context = new Contex(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer
    };

}
export default createContex;