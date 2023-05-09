

const COLOSIANS = [
        {
            id:1,
            question: 'Who is the letter to the Colossians from?',
            answer: 'Paul',
            options: ['Timothy', 'Titus', 'Paul', 'Barnabas']
        },
        
        {
            id:2,
            question: 'In Colossians 1:3-8, what does Paul give thanks to God for?',
            answer: "The Colossians' spiritual growth",
            options: ["The Colossians' material wealth", "The Colossians' spiritual growth", "The Colossians' political influence", "The Colossians' military strength"]
        },

        {
            id:3,
            question: 'What is the main message of Colossians 1:15-20?',
            answer: "Christ's authority and power over all things",
            options: [" Christ's authority and power over all things", 'The importance of keeping the Law', 'The role of angels in salvation', 'The necessity of good works for salvation']
        },

        {
            id:4,
            question: 'In Colossians 1:21-22, what does Paul say has happened to the Colossians?',
            answer: 'They have been reconciled to God',
            options: ['They have become wealthy', 'They have become powerful', 'They have become powerful', 'They have been abandoned by God']
        },
        
        {
            id:5,
            question: 'According to Colossians 1:23, what must the Colossians do in order to continue in the faith?',
            answer: 'Believe in the resurrection',
            options: ['Perform good works', 'Observe the Law', 'Remain steadfast in hope', 'Believe in the resurrection']
        }, 

        {
            id:6,
            question: 'Who or what did Paul say Christ was the image of (NIV)?',
            answer: 'The invisible God',
            options: ['The invisible God', 'The promised Messiah', 'The suffering servant', 'Perfect Love']
        },

        {
            id:7,
            question: "What does Paul call Epaphras in Colossians 1:7?",
            answer: " A faithful minister",
            options: ["A fellow prisoner", "A beloved brother", " A faithful minister", "A gifted prophet"]
        }, 

        {
            id:8,
            question: "In Colossians 1:16-17, what does Paul say about Christ?",
            answer: "He is the Creator of all things",
            options: ["He is the firstborn of all creation", "He is the head of the church", "He is the Savior of the world", "He is the Creator of all things"]
        },

        {
            id:9,
            question: "In Colossians 1:18, what does Paul call Christ?",
            answer: "The firstborn from the dead",
            options: ["The Lamb of God", "The King of kings", "The firstborn from the dead", "The Son of Man"]
        },

        {
            id:10,
            question: "In Colossians 1:19-20, what does Paul say about Christ's relationship to God?",
            answer: "Christ is equal to God",
            options: ["Christ is inferior to God", "Christ is equal to God", "Christ is greater than God", "Christ is separate from God"]
        },

        {
            id:11,
            question: "What is the reason for Paul's writing to the Colossians in Colossians 2:1-5?",
            answer: "To warn them against false teaching",
            options: ["To warn them against false teaching", "To commend them for their faith", "To ask for their financial support", "To offer them encouragement"]
        },

        {
            id:12,
            question: "What is the mystery that Paul mentions in Colossians 2:2-3?",
            answer: "The mystery of Christ in us",
            options: ["The mystery of the gospel", "The mystery of the resurrection", "The mystery of Christ in us", "The mystery of the Trinity"]
        },

        {
            id:13,
            question: "In Colossians 2:8, what does Paul warn the Colossians against?",
            answer: "Empty philosophy and deceit",
            options: ["Materialism and greed", "Sensual pleasure and indulgence", "Superstition and magic", "Empty philosophy and deceit"]
        },

        {
            id:14,
            question: "According to Colossians 2:9, in whom does the fullness of the Godhead dwell?",
            answer: "In Christ",
            options: ["In angels and saints", "In the universe and all creation", "In Christ", "In the church"]
        },

        {
            id:15,
            question: "In Colossians 2:11-12, what does Paul say has happened to the Colossians?",
            answer: "They have been circumcised in Christ",
            options: ["They have been circumcised in Christ", "They have been baptized in water", "They have been forgiven of their sins", "They have been healed of their illnesses"]
        },

        {
            id:16,
            question: "What does Paul say in Colossians 2:14-15 about the record of debt that stood against us?",
            answer: "It has been destroyed",
            options: ["It has been destroyed", "It has been transferred to someone else", "It has been hidden from view", "It has been increased in size"]
        },

        {
            id:17,
            question: "In Colossians 2:16-17, what does Paul say about the Sabbath and other Jewish holy days?",
            answer: "It has been destroyed",
            options: ["It has been destroyed", "It has been transferred to someone else", "It has been hidden from view", "It has been increased in size"]
        },

        {
            id:18,
            question: "In Colossians 2:16-17, what does Paul say about the Sabbath and other Jewish holy days?",
            answer: "They are no longer necessary under Christ",
            options: ["They are essential for salvation", "They are optional for believers", "They are no longer necessary under Christ", "They are only for the Jewish people"]
        },

        {
            id:19,
            question: "According to Colossians 2:20-23, why do the regulations and commands of human tradition have no value?",
            answer: "They do not come from God",
            options: ["They do not come from God", "They are too difficult to keep", "They are based on superstition", "They are only for show"]
        },

        {
            id:20,
            question: "What does Paul say in Colossians 2:5 about his physical absence from the Colossians?",
            answer: "He is with them in spirit",
            options: ["He has forgotten about them", "He does not care about them", "He is too busy to visit them", "He is with them in spirit"]
        },

        {
            id:21,
            question: "In Colossians 3:1, what does Paul urge the Colossians to do?",
            answer: "Set their minds on things above",
            options: ["Set their minds on earthly things", "Set their minds on things above", "Focus on their physical desires", "Focus on their social status"]
        },

        {
            id:22,
            question: "According to Colossians 3:3, what has happened to the Colossians' lives?",
            answer: "They have been hidden",
            options: ["They have been destroyed", "They have been hidden", "They have been made perfect", "They have been revealed"]
        },

        {
            id:23,
            question: "In Colossians 3:5-7, what does Paul tell the Colossians to put to death?",
            answer: "Sexual immorality, impurity, and lust",
            options: ["Greed, anger, and malice", "False teaching, idolatry, and magic", "Sexual immorality, impurity, and lust", "Laziness, gluttony, and drunkenness"]
        },

        {
            id:24,
            question: "According to Colossians 3:8-9, what must the Colossians also rid themselves of?",
            answer: "All anger and malice",
            options: [" All false teaching and deception", "All anger and malice", "All greed and materialism", "All sinful behavior and disobedience"]
        },

        {
            id:25,
            question: "In Colossians 3:10-11, what is being renewed in the Colossians?",
            answer: "Their minds and thoughts",
            options: ["Their physical bodies", "Their minds and thoughts", "Their spirits and souls", "Their social relationships"]
        },

        {
            id:26,
            question: "In Colossians 3:12, what does Paul tell the Colossians to put on?",
            answer: "Compassion, kindness, and humility",
            options: ["Wealth, power, and success", "Sensual pleasure, indulgence, and luxury", "Honor, fame, and prestige", "Compassion, kindness, and humility"]
        },

        {
            id:27,
            question: "In Colossians 3:14, what does Paul say is the bond of perfect unity?",
            answer: "Love",
            options: ["Knowledge", "Wisdom", "Love", "Faith"]
        },

        {
            id:28,
            question: "In Colossians 3:16, what does Paul urge the Colossians to do?",
            answer: "Sing psalms, hymns, and spiritual songs",
            options: ["Engage in philosophical debates", "Criticize and judge one another", "Sing psalms, hymns, and spiritual songs", "Pursue wealth and success"]
        },

        {
            id:29,
            question: "In Colossians 4:2, what does Paul urge the Colossians to do?",
            answer: "Pray and be watchful",
            options: ["Pray and be watchful", "Worry and be anxious", "Criticize and judge one another", "Boast about their own achievements"]
        },

        {
            id:30,
            question: "According to Colossians 4:3, what does Paul ask the Colossians to pray for him?",
            answer: "That he may be able to preach the gospel effectively",
            options: ["That he may be released from prison", "That he may be able to preach the gospel effectively", "That he may be granted riches and success", "That he may be spared from persecution"]
        },

        {
            id:31,
            question: "According to Colossians 4:6, how should the Colossians speak?",
            answer: "With wisdom and grace",
            options: ["With anger and harshness", "With wisdom and grace", "With deceit and manipulation", "With sarcasm and irony"]
        },

        {
            id:32,
            question: "In Colossians 4:7, who does Paul send to the Colossians?",
            answer: "Tychicus",
            options: ["Timothy", "Epaphras", "Aristarchus", "Tychicus"]
        },

        {
            id:33,
            question: "In Colossians 4:9, who does Paul send to the Colossians along with Tychicus?",
            answer: "Onesimus",
            options: ["Mark", "Demas", "Luke", "Onesimus"]
        },

        {
            id:34,
            question: "In Colossians 4:11, who is described as a comfort to Paul?",
            answer: "Timothy",
            options: ["Jesus", "Timothy", "Luke", "Onesimus"]
        },

        {
            id:35,
            question: "In Colossians 4:13, who does Paul say sends greetings to the Colossians?",
            answer: "The brethren in Laodicea",
            options: ["The saints in Jerusalem", "The Roman emperor", "The brethren in Laodicea", "The Jewish leaders"]
        },


]

export default COLOSIANS


