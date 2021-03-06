import matter from 'gray-matter';


const loadMarkdownOfCollection = (collectionContext) => {
    return ((context) => {
        const keys = context.keys();
        const values = keys.map(context);

        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
            const value = values[index];
            const document = matter(value.default);
            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            }
        });
        return data;
    })(collectionContext);
};


const CollectionLoader = {
    loadMarkdownOfCollection
};

export default CollectionLoader
