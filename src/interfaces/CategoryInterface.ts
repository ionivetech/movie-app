import { IMovie } from "./MovieInterface";

export interface ICategoryStore {
    categoryMovie: ICategoryDetail[];
    categoryTV: ICategoryDetail[];
}

export interface ICategoryDetail {
    key: string;
    title: string;
    list: IMovie[]
}