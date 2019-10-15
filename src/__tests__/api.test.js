import { api } from '../services/api';

it('getPosts should always return the same post if given a specific post', () => {
    let post1 = { 'content': 'testing', 'id': 1, 'title': 'test', 'comments': [{'id': 1, 'text': 'test comment'}], 'user': { 'id': 1, 'username': 'test' } }
    return api.posts.getPosts(1).then(json => {
        expect(json).toStrictEqual(post1)
    });
});