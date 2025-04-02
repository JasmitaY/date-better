import darkDB from "../assets/branding/dark-db-logo.svg";
import lightDB from "../assets/branding/light-db-logo.svg";

import darkInsta from "../assets/branding/dark-instagram.svg";
import darkTikTok from "../assets/branding/dark-tiktok.svg";
import darkWebsite from "../assets/branding/dark-website.svg";

import lightInsta from "../assets/branding/light-instagram.svg";
import lightTikTok from "../assets/branding/light-tiktok.svg";
import lightWebsite from "../assets/branding/light-website.svg";

import snickerdoodle from "../assets/cookie/snickerdoodle.svg";
import hazelnutPraline from "../assets/cookie/hazelnut-praline.svg";
import cashewLime from "../assets/cookie/cashew-lime.svg";
import peanutButter from "../assets/cookie/peanut-butter.svg";
import almondJava from "../assets/cookie/almond-java.svg";

import almond from "../assets/ingredients/almond.svg";
import caneSugar from "../assets/ingredients/cane-sugar.svg";
import cashew from "../assets/ingredients/cashew.svg";
import cinnamon from "../assets/ingredients/cinnamon.svg";
import citricAcid from "../assets/ingredients/citric-acid.svg";
import cocoaButter from "../assets/ingredients/cocoa-butter.svg";
import cocoaMass from "../assets/ingredients/cocoa-mass.svg";
import cocoaNibs from "../assets/ingredients/cocoa-nibs.svg";
import coconut from "../assets/ingredients/coconut.svg";
import darkChocolate from "../assets/ingredients/dark-chocolate.svg";
import date from "../assets/ingredients/date.svg";
import espresso from "../assets/ingredients/espresso-beans.svg";
import hazelnut from "../assets/ingredients/hazelnut.svg";
import limeJuice from "../assets/ingredients/lime-juice.svg";
import limeOil from "../assets/ingredients/lime-oil.svg";
import peanut from "../assets/ingredients/peanut.svg";
import seaSalt from "../assets/ingredients/sea-salt.svg";
import quinoa from "../assets/ingredients/quinoa.svg";
import vanilla from "../assets/ingredients/vanilla.svg";

import pinkOrganic from "../assets/ingredients/pink-organic.svg";
import orangeOrganic from "../assets/ingredients/orange-organic.svg";
import purpleOrganic from "../assets/ingredients/purple-organic.svg";
import brownOrganic from "../assets/ingredients/brown-organic.svg";

import letter from "../assets/dates/letter.svg";
import stargazing from "../assets/dates/stargazing.svg";
import thrifting from "../assets/dates/thrifting.svg";
import baking from "../assets/dates/baking.svg";
import roadTrip from "../assets/dates/road-trip.svg";


export const quizData = {
  title: "Date Better Quiz",
  questions: [
    {
      id: 1,
      text: "When you've had a tough day, what makes you feel most cared for?",
      options: [
        {
          text: "A long and comforting hug from a loved one",
          value: {
            physicalTouch: 5,
            qualityTime: 2,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Someone sits with you and listen to your troubles",
          value: {
            physicalTouch: 1,
            qualityTime: 5,
            wordsAffirmation: 2,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Hearing \"I'm here for you, and you're doing great\"",
          value: {
            physicalTouch: 1,
            qualityTime: 2,
            wordsAffirmation: 5,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Someone taking care of your responsibilities so you can rest",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 5,
            gifts: 2,
          },
        },
        {
          text: 'A small "thinking of you" gift like a favorite snack',
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 2,
            gifts: 5,
          },
        },
      ],
    },
    {
      id: 2,
      text: "What gesture from your partner would make your birthday feel most special?",
      options: [
        {
          text: "A full day spent together doing your favorite activities",
          value: {
            physicalTouch: 1,
            qualityTime: 5,
            wordsAffirmation: 2,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "A heartfelt letter expressing their love and appreciation",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 5,
            actsService: 1,
            gifts: 2,
          },
        },
        {
          text: "A thoughtfully chosen gift that you've been wanting",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 5,
          },
        },
        {
          text: "Being pampered with massages and physical affection",
          value: {
            physicalTouch: 5,
            qualityTime: 2,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Having them organize and plan the entire celebration",
          value: {
            physicalTouch: 1,
            qualityTime: 2,
            wordsAffirmation: 1,
            actsService: 5,
            gifts: 1,
          },
        },
      ],
    },
    {
      id: 3,
      text: "What makes you feel most appreciated after helping your partner?",
      options: [
        {
          text: "When they express detailed gratitude",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 5,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "When they reciprocate with helpful actions",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 5,
            gifts: 1,
          },
        },
        {
          text: "When they spend extra time with you afterward",
          value: {
            physicalTouch: 1,
            qualityTime: 5,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "When they show physical appreciation like a kiss",
          value: {
            physicalTouch: 5,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "When they surprise you with a thank-you gift",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 5,
          },
        },
      ],
    },
    {
      id: 4,
      text: "What bothers you most when you're feeling disconnected from your partner?",
      options: [
        {
          text: "Lack of meaningful conversation and shared activities",
          value: {
            physicalTouch: 1,
            qualityTime: 5,
            wordsAffirmation: 2,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Absence of physical closeness and touch",
          value: {
            physicalTouch: 5,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Not receiving verbal reassurance and appreciation",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 5,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "When they stop doing helpful things for you",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 5,
            gifts: 1,
          },
        },
        {
          text: "Missing the little surprises and tokens of affection",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 5,
          },
        },
      ],
    },
    {
      id: 5,
      text: "During a conflict, what helps you feel most reconnected?",
      options: [
        {
          text: "When they validate your feelings with supportive words",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 5,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "A peace offering or meaningful gift",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 5,
          },
        },
        {
          text: "Sitting together without distractions to work things out",
          value: {
            physicalTouch: 1,
            qualityTime: 5,
            wordsAffirmation: 2,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "When they take initiative to resolve the issue",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 5,
            gifts: 1,
          },
        },
        {
          text: "A gentle touch or reconciliatory hug",
          value: {
            physicalTouch: 5,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
      ],
    },
    {
      id: 6,
      text: "What would be your ideal lazy Sunday?",
      options: [
        {
          text: "Cuddling and physical closeness all day",
          value: {
            physicalTouch: 5,
            qualityTime: 2,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Your partner handling all the cooking and chores",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 5,
            gifts: 1,
          },
        },
        {
          text: "Receiving a surprise package or gift",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 5,
          },
        },
        {
          text: "Trying out a new recipe with your partner",
          value: {
            physicalTouch: 1,
            qualityTime: 5,
            wordsAffirmation: 1,
            actsService: 2,
            gifts: 1,
          },
        },
        {
          text: "Hearing how much you mean to them",
          value: {
            physicalTouch: 1,
            qualityTime: 2,
            wordsAffirmation: 5,
            actsService: 1,
            gifts: 1,
          },
        },
      ],
    },
    {
      id: 7,
      text: "When traveling together, what makes you feel most cherished?",
      options: [
        {
          text: "Them planning the itinerary and handling logistics",
          value: {
            physicalTouch: 1,
            qualityTime: 2,
            wordsAffirmation: 1,
            actsService: 5,
            gifts: 1,
          },
        },
        {
          text: "Collecting small souvenirs for each other",
          value: {
            physicalTouch: 1,
            qualityTime: 1,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 5,
          },
        },
        {
          text: "Walking hand in hand exploring new places",
          value: {
            physicalTouch: 5,
            qualityTime: 3,
            wordsAffirmation: 1,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Sharing observations and experiencing things together",
          value: {
            physicalTouch: 1,
            qualityTime: 5,
            wordsAffirmation: 2,
            actsService: 1,
            gifts: 1,
          },
        },
        {
          text: "Them expressing excitement about making memories with you",
          value: {
            physicalTouch: 1,
            qualityTime: 2,
            wordsAffirmation: 5,
            actsService: 1,
            gifts: 1,
          },
        },
      ],
    },
  ],
  resultCategories: [
    // {
    //   id: "snickerdoodle",
    //   title: "Snickerdoodle\nCookie",
    //   description: "The kind soul\nwho radiates warmth",
    //   cookieImage: snickerdoodle,
    //   primaryColor: "#EBB0B6",
    //   textColor: "#692800",
    //   organicImage: pinkOrganic,
    //   dbLogo: darkDB,
    //   about:
    //     "Cinnamon-kissed\nnut butter and almond\npieces create a nostalgic,\nheartwarming bite--\nperfect for the kind soul\nwho radiates warmth.",
    //   ingredients: [
    //     { name: "Medjool Dates", icon: date },
    //     { name: "Dark Chocolate", icon: darkChocolate, organic: true },
    //     { name: "Almonds", icon: almond },
    //     { name: "Cashews", icon: cashew },
    //     { name: "Coconut", icon: coconut },
    //     { name: "Cinnamon", icon: cinnamon },
    //     { name: "Vanilla", icon: vanilla },
    //     { name: "Sea Salt", icon: seaSalt },
    //   ],
    //   dateIdea: {
    //     title: '"52 Reasons Why"\nLetter Writing',
    //     image: letter,
    //   },
    //   socialMedia: {
    //     instagramLogo: darkInsta,
    //     tiktokLogo: darkTikTok,
    //     websiteLogo: darkWebsite,
    //     instagramLink: "https://www.instagram.com/datebettersnacks/",
    //     tiktokLink: "https://www.tiktok.com/@datebettersnacks",
    //     websiteLink: "https://datebettersnacks.com/",
    //   },
    // },
    {
      id: "hazelnutPraline",
      title: "Hazelnut\nPraline",
      description: "The one who loves\nself-care & comfort",
      cookieImage: hazelnutPraline,
      primaryColor: "#D96114",
      textColor: "#F6EAD5",
      organicImage: orangeOrganic,
      dbLogo: lightDB,
      about:
        "Indulgent hazelnut\npraline delivers\ncozy, self-care vibes\nfor quiet nights in,\nwrapped in warmth\nand comfort.",
      ingredients: [
        { name: "Medjool Dates", icon: date },
        { name: "Dark Chocolate", icon: darkChocolate, organic: true },
        { name: "Cane Sugar", icon: caneSugar },
        { name: "Cocoa Butter", icon: cocoaButter },
        { name: "Cocoa Nibs", icon: cocoaNibs, organic: true },
        { name: "Hazelnuts", icon: hazelnut },
        { name: "Sea Salt", icon: seaSalt },
      ],
      dateIdea: {
        title: "Stargazing & Cuddles",
        image: stargazing,
      },
      socialMedia: {
        instagramLogo: lightInsta,
        tiktokLogo: lightTikTok,
        websiteLogo: lightWebsite,
        instagramLink: "https://www.instagram.com/datebettersnacks/",
        tiktokLink: "https://www.tiktok.com/@datebettersnacks",
        websiteLink: "https://datebettersnacks.com/",
      },
    },
    {
      id: "cashewLime",
      title: "Cashew Lime\nCrisp",
      description: "The vibrant spirit who\nloves spontaneity",
      cookieImage: cashewLime,
      primaryColor: "#DDB3EA",
      textColor: "#692800",
      organicImage: purpleOrganic,
      dbLogo: darkDB,
      about:
        "Zesty lime, creamy\ncashew butter, and\ntoasted quinoa crunch\nmake every bite vibrant\nand exciting— ideal for\nthe spontaneous spirit.",
      ingredients: [
        { name: "Medjool Dates", icon: date },
        { name: "Dark Chocolate", icon: darkChocolate, organic: true },
        { name: "Quinoa", icon: quinoa, organic: true },
        { name: "Raw Cashews", icon: cashew },
        { name: "Sea Salt", icon: seaSalt },
        { name: "Citric Acid", icon: citricAcid },
        { name: "Lime Oil", icon: limeOil },
        { name: "Lime Juice", icon: limeJuice },
      ],
      dateIdea: {
        title: "Thrifting & Gifting\nChallenge",
        image: thrifting,
      },
      socialMedia: {
        instagramLogo: darkInsta,
        tiktokLogo: darkTikTok,
        websiteLogo: darkWebsite,
        instagramLink: "https://www.instagram.com/datebettersnacks/",
        tiktokLink: "https://www.tiktok.com/@datebettersnacks",
        websiteLink: "https://datebettersnacks.com/",
      },
    },
    {
      id: "peanutButter",
      title: "Peanut Butter\nCrunch",
      description: "The one who loves\ncozy uplifting moments",
      cookieImage: peanutButter,
      primaryColor: "#D96114",
      textColor: "#F6EAD5",
      organicImage: orangeOrganic,
      dbLogo: lightDB,
      about:
        "Rich peanut butter\nwith crunchy cacao\nnibs offers a sweet,\ngrounding treat for\nthose who cherish\ncozy, uplifting\nmoments.",
      ingredients: [
        { name: "Medjool Dates", icon: date },
        { name: "Dark Chocolate", icon: darkChocolate, organic: true },
        { name: "Cane Sugar", icon: caneSugar },
        { name: "Cocoa Butter", icon: cocoaButter },
        { name: "Cocoa Nibs", icon: cocoaNibs },
        { name: "Peanuts", icon: peanut, organic: true },
        { name: "Sea Salt", icon: seaSalt },
      ],
      dateIdea: {
        title: "Baking Night",
        image: baking,
      },
      socialMedia: {
        instagramLogo: lightInsta,
        tiktokLogo: lightTikTok,
        websiteLogo: lightWebsite,
        instagramLink: "https://www.instagram.com/datebettersnacks/",
        tiktokLink: "https://www.tiktok.com/@datebettersnacks",
        websiteLink: "https://datebettersnacks.com/",
      },
    },
    {
      id: "almondJava",
      title: "Almond Java\nCrunch",
      description: "The go-getter who\nthrives on energy",
      cookieImage: almondJava,
      primaryColor: "#B58D3B",
      textColor: "#F6EAD5",
      organicImage: brownOrganic,
      dbLogo: lightDB,
      about:
        "Bold espresso, crunchy\nalmonds, and a touch\nof sweetness fuel the\ndriven spirit—-perfect\nfor those who chase\ntheir passions with\nunstoppable energy.",
      ingredients: [
        { name: "Medjool Dates", icon: date },
        { name: "Dark Chocolate", icon: darkChocolate, organic: true },
        { name: "Cane Sugar", icon: caneSugar },
        { name: "Cocoa Butter", icon: cocoaButter },
        { name: "Cocoa Mass", icon: cocoaMass },
        { name: "Almonds", icon: almond },
        { name: "Espresso Beans", icon: espresso },
      ],
      dateIdea: {
        title: "Sunset Road Trip",
        image: roadTrip,
      },
      socialMedia: {
        instagramLogo: lightInsta,
        tiktokLogo: lightTikTok,
        websiteLogo: lightWebsite,
        instagramLink: "https://www.instagram.com/datebettersnacks/",
        tiktokLink: "https://www.tiktok.com/@datebettersnacks",
        websiteLink: "https://datebettersnacks.com/",
      },
    },
  ],
  // This maps love language scores to cookie personality types
  // This is one approach - you might need to adjust the scoring logic
  resultMapping: {
    // If physical touch is the dominant language
    physicalTouch: {
      primary: "hazelnutPraline",
    },
    // If quality time is the dominant language
    qualityTime: {
      primary: "almondJava",
    },
    // wordsAffirmation: {
    //   primary: "snickerdoodle",
    // },
    // If words of affirmation is the dominant language (reassigned to Cashew Lime)
    wordsAffirmation: {
      primary: "cashewLime",
    },
    // If acts of service is the dominant language
    actsService: {
      primary: "peanutButter",
    },
    // If receiving gifts is the dominant language (reassigned unique mapping)
    gifts: {
      primary: "cashewLime",
    },
  },
};