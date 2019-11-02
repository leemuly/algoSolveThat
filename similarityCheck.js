//if several, separate users leave positive reviews for the same businesses, we can assume those businesses are similar
//given a list of positive reviews and a business of interest, return the most similar business

// Sample Input
//     {
//         "businessOfInterestId": 10,
        let positiveReviews = [
            {
                "userId": 1,
                "businessId": 10
            },
            {
                "userId": 2,
                "businessId": 10
            },
            {
                "userId": 1,
                "businessId": 11
            },
            {
                "userId": 2,
                "businessId": 11
            },
            {
                "userId": 1,
                "businessId": 12
            },
            {
                "userId": 2,
                "businessId": 12
            },
            {
                "userId": 3,
                "businessId": 12
            }
        ]
//     }

// Sample Output
//     11

// Business Similarity Score against business 10:
//     11: 2 / (2 + 2 - 2) = 1.0
//     12: 2 / (2 + 3 - 2) = 0.667

function findMostSimilarBusiness(businessOfInterestId, positiveReviews) {
    // compared business: num of unique users who reviewed both businesses / (num of users who reviewed business a + num reviewed business b - num of users who reviewed both)

    // filter array of reviewers for business of interest
    let boIReviewers = positiveReviews.filter(review => review.businessId === businessOfInterestId)
    boIReviewers = boIReviewers.map(review => review.userId)
    let otherReviews = positiveReviews.filter(review => review.businessId !== businessOfInterestId)

    // hash table to store comparisons for each business
    let comparisonHash = {}
    for(let reviewIndex = 0; reviewIndex < positiveReviews.length; reviewIndex++){
        //check if business is in the hash table and is not the BoI
        if(!comparisonHash[positiveReviews[reviewIndex].businessId]
        & positiveReviews[reviewIndex].businessId !== businessOfInterestId){
            comparisonHash[positiveReviews[reviewIndex].businessId] = 0
        }
    }

    //loop through each key in the hash
    for(let compareId in comparisonHash){
        //loop through the array index
        let sharedReviews = 0
        let uniqueReviews = 0
        for(let reviewIndex = 0; reviewIndex < otherReviews.length; reviewIndex++){
            let currentReview = otherReviews[reviewIndex]
            if(currentReview.businessId == compareId){
                //store number of reviews shared by both businesses
                if(boIReviewers.includes(currentReview.userId)){
                    sharedReviews++
                    uniqueReviews++
                } else {
                //store number of unique reviews
                    uniqueReviews++
                }
            }
        }

        comparisonHash[compareId] = (sharedReviews / (boIReviewers.length + uniqueReviews - sharedReviews))
                    //do the math and assign value in hash
    }

    //return business id with highest comparison score from hash
    let mostSimilarBusiness = 0
    let highestScore = 0
    for(let businessId in comparisonHash){
        if(comparisonHash[businessId] > highestScore){
            mostSimilarBusiness = businessId
            highestScore = comparisonHash[businessId]
        }
    }
    console.log(mostSimilarBusiness)

}

findMostSimilarBusiness(10, positiveReviews)
