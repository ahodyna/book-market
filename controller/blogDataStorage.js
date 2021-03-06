let blogData = [
    {
        id: '1a1',
        title: 'PEN America World Voices Festival',
        image: '/image/blog_image.jpg',
        description: "The 2020 PEN America Virtual Gala merged our annual New York Literary Gala and Los Angeles LitFest Gala into one national, virtual celebration on December 8.Our digital program represented a crucial moment for our community to stand together in recognition of our deserving honorees and to fortify our mission at a time of extraordinary needs and demands.The fight for creative expression is so important, now more than ever, and thousands tuned in for a unique, one-night-only event to toast to human rights and the power of words."
    },
    {
        id: '1a2',
        title: 'PEN America World Voices Festival',
        image: '/image/blog_image.jpg',
        description: "The 2020 PEN America Virtual Gala merged our annual New York Literary Gala and Los Angeles LitFest Gala into one national, virtual celebration on December 8.Our digital program represented a crucial moment for our community to stand together in recognition of our deserving honorees and to fortify our mission at a time of extraordinary needs and demands.The fight for creative expression is so important, now more than ever, and thousands tuned in for a unique, one-night-only event to toast to human rights and the power of words."
    },
    {
        id: '3a1',
        title: 'PEN America World Voices Festival',
        image: '/image/blog_image.jpg',
        description: "The 2020 PEN America Virtual Gala merged our annual New York Literary Gala and Los Angeles LitFest Gala into one national, virtual celebration on December 8.Our digital program represented a crucial moment for our community to stand together in recognition of our deserving honorees and to fortify our mission at a time of extraordinary needs and demands.The fight for creative expression is so important, now more than ever, and thousands tuned in for a unique, one-night-only event to toast to human rights and the power of words."
    }
]

export default {
    getAllBlog: () => {
        return blogData
    },
    getPageBlog: (page, itemsPerPage) => {
        let result = blogData;
        let arr = []

        let firstIndex = itemsPerPage * (page - 1)
        let lastIndex = firstIndex + itemsPerPage - 1

        for (let i = firstIndex; i <= lastIndex && i < result.length; i++) {
            arr.push(result[i])
        }
        return arr;
    },
    createBlogItem: function (item) {
        item.id = 'c' + Math.ceil((Math.random() * 100000));
        blogData.push(item)
        return item
    },
    getBlogItem: (id) => {
        return blogData.find(elem => elem.id === id)
    },
    updateBlogItem: function (id, blog) {
        for (let i = 0; i < blogData.length; i++) {
            if (blogData[i].id === id) {
                blogData.id = id;
                blogData[i] = blog
                return blogData[i]
            }
        }
        return null
    },
    deleteBlogItem: function (id) {
        for (let i = 0; i < blogData.length; i++) {
            if (blogData[i].id === id) {
                return blogData.splice(i, 1)
            }
        }
        return null
    },
    count: () => {
        let arr = blogData;
        return arr.length;
    }
}