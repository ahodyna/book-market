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
    getItemBlog: () => {
        return blogData
    },
    createBlogItem: function (item) {
        item.id = 'c' + Math.ceil((Math.random() * 100000));
        blogData.push(item)
        return item
    }
}