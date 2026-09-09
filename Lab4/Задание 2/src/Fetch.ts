import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

/**
 * Необходимо реализовать функцию для получения первых 5 постов с нечётными id
 */
export async function getOddPosts(): Promise<PostDTO[]> {

};

/**
 * Необходимо реализовать функцию для получения первых 5 комментариев с чётными id
 */
export async function getEvenComments(): Promise<CommentDTO[]> {

}