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
    const fetchSpy = jest.spyOn(global, "fetch");

    beforeEach(() => {
        wrapper = Enzyme.mount(<PostsHolder />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("has an initial state of posts as an empty array", () => {
        expect(wrapper.state()).toEqual({ posts: []});
    });

    describe("Fetch posts", () => {
        it("Should fetch posts when component is mounted", () => {
            expect(fetchSpy).toBeCalled();
        });
    });
});