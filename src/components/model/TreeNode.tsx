import React, {useState} from 'react';

// @ts-ignore
function TreeNode(props) {
    const [node, setNode] = useState(props.node);

    return (
        <li>
            <a href="src/components/model/TreeNode#">{node._value}</a>
            {node._left === undefined && node._right === undefined ? null : (
                <ul>
                    {node._left !== undefined ? (
                        <TreeNode node={node._left}/>
                    ) : null}

                    {node._right !== undefined ? (
                        <TreeNode node={node._right}/>
                    ) : null}
                </ul>
            )}
        </li>
    )
}

export default TreeNode;
