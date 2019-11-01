import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PostsHolder from '../components/PostsHolder';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    Enzyme.shallow(<PostsHolder />)
});

describe("<PostsHolder />", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = Enzyme.mount(<PostsHolder />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("has an initial state of posts as an empty array", () => {
        expect(wrapper.state()).toEqual({ posts: []});
    });
});