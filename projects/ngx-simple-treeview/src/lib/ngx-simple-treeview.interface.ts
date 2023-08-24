interface TreeData<T = any>  
{
    text: string;   
    internalChildren?: TreeData<T>[];
    isExpanded?: boolean;
    selected?:boolean; 
    show?:boolean;
    [name: string]: any;
};