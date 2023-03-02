import './App.css'
import React, {useEffect} from "react";
import Tree from "./Tree";


class BinaryTree<T> {
    _value: T;
    _left?: BinaryTree<T>;
    _right?: BinaryTree<T>;

    constructor(value: T) {
        this._value = value;
    }
}

class BinarySearchTree<T> {
    root?: BinaryTree<T>;
    comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    insert(data: T): BinaryTree<T> | undefined {
        if (!this.root) {
            this.root = new BinaryTree(data);
            return this.root;
        }

        let current = this.root;

        while (true) {
            if (this.comparator(data, current._value) === 1) {
                if (current._right) {
                    current = current._right;
                } else {
                    current._right = new BinaryTree(data);
                    return current._right;
                }
            } else {
                if (current._left) {
                    current = current._left;
                } else {
                    current._left = new BinaryTree<T>(data);
                    return current._left;
                }
            }
        }
    }

    search(data: T): BinaryTree<T> | undefined {

        if (!this.root) return undefined;

        let current = this.root;

        while (this.comparator(data, current._value) !== 0) {
            if (this.comparator(data, current._value) === 1) {
                if (!current._right) return;
                current = current._right;
            } else {
                if (!current._left) return;

                current = current._left;
            }
        }

        return current;
    }
}

function App() {

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true);
    }, [])

    // @ts-ignore
    const detectKeyDown = (e) => {
        if (e.key === ' ') {
            tree.insert(randomNumberFromInterval(-100, 100));
        }
    }

    function comparator(a: number, b: number) {
        if (a < b) return -1;

        if (a > b) return 1;

        return 0;
    }

    function randomNumberFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const tree = new BinarySearchTree(comparator);

    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));
    tree.insert(randomNumberFromInterval(-100, 100));

    return (
        <div className="App">
            <div className="tree">
                <Tree node={tree.root}/>
            </div>
        </div>
    )
}

export default App
