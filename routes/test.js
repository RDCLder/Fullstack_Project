
db.community.findAll({
    where: { name: communityPage }
})
    .then(community => {
        results["community"] = community;
        db.topic.findAll({
            where: { community_id: community[0].dataValues.id },
            include: [
                { model: db.user, required: true }
            ]
        })
            .then(topics => {
                console.log(topics);
                let topicTimes = [];
                for (let i = 0; i < topics.length; i++) {
                    let topicStamp = topics[i].dataValues.createdAt;
                    topicTimes.push(timeAgo(topicStamp));
                }

                if (!req.user) {
                    res.render("community", {
                        pageTitle: communityPage,
                        pageID: communityPage,
                        pageType: "community",
                        topics: topics,
                        topicTimes: topicTimes,
                        noTopics: false,
                        isLoggedIn: false
                    });
                }
                else if (req.user) {
                    res.render("community", {
                        pageTitle: communityPage,
                        pageID: communityPage,
                        pageType: "community",
                        topics: topics,
                        topicTimes: topicTimes,
                        noTopics: false,
                        isLoggedIn: true,
                        user: req.user
                    });
                }
            })
    })
    .catch(() => {
        res.redirect("/404");
    })