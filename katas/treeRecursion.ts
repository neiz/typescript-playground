/// TypeScript Implemetation of processing a Tree data structure using recursion.

interface ITreeNode {
}

class TreeNode {
    value: string;
    children: TreeNode[];
    hasChildren: boolean;

    constructor(value: string, children: TreeNode[]) {
        this.value = value;
        this.children = children;
        this.hasChildren = children.length > 0;
    }
}

interface IDictionary {
    add(key: string, value: any): void;
    remove(key: string): void;
    containsKey(key: string): boolean;
    keys(): string[];
    values(): any[];
}

class Dictionary {

    _keys = new Array<string>();
    _values = new Array<any>();

    constructor(init: { key: string; value: any; }[]);
    constructor();
    constructor(init?: { key: string; value: any; }[]) {

        for (var x = 0; x < init.length; x++) {
            this[init[x].key] = init[x].value;
            this._keys.push(init[x].key);
            this._values.push(init[x].value);
        }
    }

    add(key: string, value: any) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    }

    remove(key: string) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);

        delete this[key];
    }

    keys(): string[] {
        return this._keys;
    }

    values(): any[] {
        return this._values;
    }

    containsKey(key: string) {
        if (typeof this[key] === "undefined") {
            return false;
        }

        return true;
    }

    toLookup(): IDictionary {
        return this;
    }
}

// Produce output
window.onload = () => {

    // Initialization
    var list = new Array<TreeNode>();
    var dictionary = new Dictionary();

    // Recursively process nodes
    var processNodes = (treeNode) => {
        if (!dictionary.containsKey(treeNode.value)) {
            dictionary.add(treeNode, 1);
        } else {
            dictionary[treeNode.value]++;
        }

        if (treeNode.children) {
            treeNode.children.forEach(treeNodeChild => {
                processNodes(treeNodeChild);
            });
        }
    };

    // Perform logic; Main();
    list.forEach(treeNode => {
        processNodes(treeNode);
    });
};