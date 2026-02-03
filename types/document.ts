export type TextNode =
{
    type: "text";
    value: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    code?: boolean;
    link?: string;
}

export type ContainerNode = 
| 
{
    type: "paragraph";
    children: TextNode[];
}
|
{
    type: "heading";
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: TextNode[];
}
|
{
    type: "quote";
    children: TextNode[];
}
|
{
    type: "code";
    children: TextNode[];
};

export type DocumentAST = 
{
    blocks: ContainerNode[];
}