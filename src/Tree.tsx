import React from "react";
import { useState} from "react";
import TreeNode from "./TreeNode";

// @ts-ignore
function Tree(props) {
    const [node, setNode] = useState(props.node);

    console.log(node);

    return (
        node !== undefined ? (
            <ul>
                <li>
                    <a href="#">{node._value}</a>
                    <ul>
                        {node._left !== undefined ? (
                            <TreeNode node={node._left}/>
                        ) : null}

                        {node._right !== undefined ? (
                            <TreeNode node={node._right}/>
                        ) : null}
                    </ul>
                </li>
            </ul>
        ) : null
    )
}

export default Tree;
