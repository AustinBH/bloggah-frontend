export default function() {
    return Promise.resolve({
        json: () =>  Promise.resolve([
            {
                id: 1,
                title: "Test",
                content: "Testing",
                user: {
                    id: 1,
                    username: "Test"
                },
                comments: []
            }
        ])
    });
};