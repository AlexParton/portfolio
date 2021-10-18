class WORK {
    constructor(title, type, desc, stack, media, url) {
        this.title = title;
        this.type = type;
        this.desc = desc;
        this.stack = stack;
        this.media = media;
        this.url = url;
    }
}

export const WorkData = [
    new WORK('OnTheMove', 'PWA', 'A moving box manager. To create a virtual inventory of all the things carried on a house move. (Sorry it\'s in spanish, I\'ve built it for personal use.)', 'Svelte', 'assets/gifs/onthemove.gif' ,'Demo only'),
    new WORK('Excusator', 'Native APP', 'A random excuses generator that covers three different scenarios and sends a WhatsApp message to any of your contacts.', 'React Native', 'assets/gifs/excusator.gif' ,'Demo only'),
    new WORK('Car Match', 'PWA', 'Browse cars and find the one that fits your needs after answering some questions about your preferences. ', 'Svelte', 'assets/gifs/carmatch.gif' ,'Demo only'),
    new WORK('This Portfolio', 'PWA', 'A portfolio to show my works, including a portfolio to show my works, including a portfolio to show my works.', 'Svelte', 'assets/gifs/portfolio3.gif' ,'Demo only'),
];