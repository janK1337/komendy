const { Discord, MessageEmbed, Message } = require("discord.js");

	module.exports = {
		name: "embed",

		run: async (client, message, args) => {
            
            
            let tytul = "";
            let opis = "";
            let footer = "";
            let pominiecia = 0;

                        

let filter = (message) => !message.author.bot;
let collector = message.channel.createMessageCollector(filter,  { max: 1, time: 30000 });

message.channel.send("Podaj Tytuł Embeda Masz na to 30 sekund!\nAby pominąć wpisz (Pomiń)")

collector.on('collect', (m) => {

    if(m.content.toLowerCase() === "pomiń") {
        pominiecia++
        tytul = ""
    } else {
         tytul = m.content
    }


});

collector.on('end', (m) => {
    if(m.size === 0) {
        return message.channel.send("Nie podałeś tytułu! Czynność anulowana!")
    }
let filter = (message) => !message.author.bot;

let collector = message.channel.createMessageCollector(filter, {  max: 1, time: 30000});

message.channel.send("Podaj opis Embeda! Masz na to 30 sekund!\nAby pominąć wpisz (Pomiń)")

collector.on('collect', (m) => {
    
    if(m.content.toLowerCase() === "pomiń") {
        pominiecia++
        opis = ""
    } else {
         opis = m.content
    }


});

collector.on('end', (m) => {
    if(m.size === 0) {
        return message.channel.send("Nie podałeś opisu! Czynność anulowana!")
    }
    let filter = (message) => !message.author.bot;

    let collector = message.channel.createMessageCollector(filter, {  max: 1, time: 30000,  errors: ['time'] });
    
    message.channel.send("Podaj footer Embeda! Masz na to 30 sekund!\nAby pominąć wpisz (Pomiń)")
    
    collector.on('collect', (m) => {
        if(m.content.toLowerCase() === "pomiń") {
            pominiecia++
            footer = ""
        } else {
             footer = m.content
        }

    });
    collector.on('end', () => {
        if(m.size === 0) {
            return message.channel.send("Nie podałeś Footera! Czynność anulowana!")
        }
        let filter = (message) => !message.author.bot;

        let collector = message.channel.createMessageCollector(filter, {  max: 1, time: 30000});
        
        message.channel.send("Podaj kolor embeda! Masz na to 30 sekund! \n Do wyboru: \n \`Czerwony\`, \`Zielony\`,  \`Niebieski\`, \`Brak (Czarny)\`")
        
        collector.on('collect', (m) => {
            if(m.content.toLowerCase() === "czerwony") {
                kolor = "FF0000"
                
            }
            if(m.content.toLowerCase() === "zielony") {
                kolor = "008000"
            }
            if(m.content.toLowerCase() === "niebieski") {
                kolor = "0000FF"
            }
            if(m.content.toLowerCase() === "brak") {
                kolor = "#000000"
            }
  
    
        });
        collector.on('end', (m) => {
            if(m.size === 0) {
                return message.channel.send("Nie podałeś koloru! Czynność anulowana!")
            }
            if(pominiecia >= 2) {
               return message.channel.send("Pominąłes za duzo rzeczy! Czynność anulowana...")
            } 
            let embed = new MessageEmbed()
            .setTitle(tytul)
            .setDescription(opis)
            .setFooter(footer)
            .setColor(kolor)
            message.channel.send(embed)

            


    });
});
});
}
)}}
                
                



        
    
