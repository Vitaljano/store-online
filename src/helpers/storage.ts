class Storage {
    get(key: string) {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
    }
    set(key: string, value: [] | object | string) {
        // console.log(JSON.stringify(value));

        localStorage.setItem(key, JSON.stringify(value));
    }
    clear() {
        localStorage.clear();
    }
}

export const storage = new Storage();
