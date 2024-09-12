declare type TodoDrawerProps = {
    title : string,
    setTitle? : React.Dispatch<React.SetStateAction<string>>,
    isChecked : boolean,
    setIsChecked? : React.Dispatch<React.SetStateAction<boolean>>,
    status : string,
    setStatus? : React.Dispatch<React.SetStateAction<string>>,
    date?: Date,
    setDate? : React.Dispatch<React.SetStateAction<Date>> ,
    description: string,
    setDescription?:React.Dispatch<React.SetStateAction<string>>,
    flag: boolean,
    setFlag?: React.Dispatch<React.SetStateAction<boolean>>
}

declare type CalendarProps = {
    date?: Date,
    setDate: ()=> void,
}


declare type IContextType = {
    user: IUser,
    isLoading: boolean,
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
}


declare type IUser = {
    id: string;
    name: string;
    email: string;
    imageURL: string;
    imageID?:string;
  };

  declare type INewUser = {
    name: string;
    email: string;
    password: string;
  };


  declare type TodoContextType = {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    date: Date | undefined;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    flag: boolean;
    setFlag: React.Dispatch<React.SetStateAction<boolean>>;
    allTodos: any[];
    setAllTodos: (todos: any[]) => void;
};
