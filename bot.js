const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'S!'

const moment = require("moment")

const fs = require("fs")

 

client.on('ready', () => {

client.user.setActivity("Star Army || S!help",{type: 'WATCHING'})

});

 

client.login(process.env.BOT_TOKEN2);

 

client.on('message',async message => {

  if(message.content.startsWith(prefix + "setvvvv")) {

  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');

  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');

  message.channel.send('**تم**');

  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {

    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);

    c.overwritePermissions(message.guild.id, {

      CONNECT: false,

      SPEAK: false

    });

    setInterval(function() {

      c.setName(`VoiceOnline: [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)

    },1000);

  });

  }

});

 

client.on("guildMemberAdd", member => {

  member.createDM().then(function (channel) {

  return channel.send(`**Welcome ${member} To Star Army || Server :rose:`)

}).catch(console.error)

})

 

      client.on("guildMemberRemove", member => {    

    let welcomer1 = member.guild.channels.find('name', `main-chat`)

    if(!welcomer1) return;

     welcomer1.send(`**${member} نتما انك استمتعت قبل المغادره**`);

      })  

 

client.on("guildMemberAdd", member => {

let welcomer = member.guild.channels.find('name', `main-chat`)

let memberavatar = member.user.avatarURL

if (!welcomer) return;

if(welcomer) {

moment.locale('ar-ly');

var mrx = member.user;

let mrxembed = new Discord.RichEmbed()

.setTitle(mrx.username,`#${mrx.discriminator}`)

.addField('» مضى على دخولخ الديسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)          

.addField('» انت رقم',`${member.guild.memberCount}`,true)

.setThumbnail(mrx.avatarURL)

.setFooter("Star Army || جيش النجوم.")

welcomer.send({embed:mrxembed});          

}})

 

client.on('guildMemberAdd', member => {

member.guild.fetchInvites().then(guildInvites => {

const ei = invites[member.guild.id];

invites[member.guild.id] = guildInvites;

const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);

const inviter = client.users.get(invite.inviter.id);

const logChannel = member.guild.channels.find(channel => channel.name === `main-chat`);

if(!logChannel) return;

setTimeout(() => {

logChannel.send(`Invited By: <@${inviter.id}>`);

},2000)

});

});

 

client.on('guildMemberAdd',async member => {

const Canvas = require('canvas');

const jimp = require('jimp');

const w = ['./welcome_4.png'];

let Image = Canvas.Image,

    canvas = new Canvas(800, 300),

    ctx = canvas.getContext('2d');

ctx.patternQuality = 'bilinear';

ctx.filter = 'bilinear';

ctx.antialias = 'subpixel';

ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';

ctx.shadowOffsetY = 2;

ctx.shadowBlur = 2;

ctx.stroke();

ctx.beginPath();

 

fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

    if (err) return console.log(err);

    let BG = Canvas.Image;

    let ground = new Image;

    ground.src = Background;

    ctx.drawImage(ground, 0, 0, 800, 300);

 

})

 

        let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;

        jimp.read(url, (err, ava) => {

            if (err) return console.log(err);

            ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

         if (err) return console.log(err);

 

  ctx.font = '36px Arial';

  ctx.fontSize = '72px';

  ctx.fillStyle = "#ffffff";

  ctx.textAlign = "center";

  ctx.fillText(member.user.username, 545, 177);

 

  ctx.font = '16px Arial Bold';

  ctx.fontSize = '72px';

  ctx.fillStyle = "#ffffff";

  ctx.textAlign = "center";

  ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);

 

  let Avatar = Canvas.Image;

  let ava = new Avatar;

  ava.src = buf;

  ctx.beginPath();

  ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);

  ctx.closePath();

  ctx.clip();

  ctx.drawImage(ava, 36, 21, 260, 260);

   

  let c = member.guild.channels.find('name', `main-chat`)

  if(!c) return;

  c.sendFile(canvas.toBuffer());

 

});

});

});

 

const invites = {};

 

const wait = require('util').promisify(setTimeout);

 

client.on('ready', () => {

wait(1000);

 

client.guilds.forEach(g => {

g.fetchInvites().then(guildInvites => {

invites[g.id] = guildInvites;

});

});

});

 

 

client.on('message', message => {

     if (message.content === "S!help") {

         console.log(`${message.author.username} Has Ran Help Command`)

message.author.send(`**

» S!ban __@NAME__ ( حظر الشخصيه )

» S!kick __@NAME__ ( طرد الشخصيه )

» S!mute __@NAME__ ( اسكات الشخصيه )

» S!unmute __@NAME__ ( فك اسكات الشخصيه )

» S!clear  ( مسح الرسائل الخاصه بلمحادثه )

» S!dc __ROOM NAME__ ( محي الروم )

» S!ct __ROOM NAME__ ( صنع روم كتابي )

» S!cv __ROOM NAME__ ( صنع روم صوتي )**`);

     }

});

 

client.on('message', message => {

    if (message.author.bot) return;

    let args = message.content.split(" ").slice(1);

      if(message.content.startsWith(prefix + 'ban')) {

      if(!message.channel.guild) return message.reply('**Only Servers | :x:**');

   console.log(`${message.author.username} Has Ran Ban Command`)

 

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Need ``BAN_MEMBERS`` | :x:**");

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**Bot Need ``BAN_MEMBERS`` | :x:**");

    let user = message.mentions.users.first();

    let reason = message.content.split(" ").slice(2).join(" ");

    if (message.mentions.users.size < 1) return message.reply("**Mention Member | :x:**");

    if(!reason) return message.reply ("**Write Reason | :x:**");

    if (!message.guild.member(user)

    .bannable) return message.reply("**Please Give ``Star Army`` a High Role | :x:**");

 

    message.guild.member(user).ban(7, user);

 

    const BanEmbed = new Discord.RichEmbed()

          .setColor("RANDOM")

          .setTitle('**Star Army || جيش النجوم**')

          .setDescription(`**Done Ban ${user}

  By ${message.author.username}** | :white_check_mark:`)

          .setAuthor(message.guild.name)

    message.channel.send({

      embed : BanEmbed

    })

  }

  });

 

  client.on('message', message => {

    if (message.author.bot) return;

      if(message.content.startsWith(prefix + 'kick')) {

                 if(!message.channel.guild) return message.reply('**Only Servers | :x:**');

   console.log(`${message.author.username} Has Ran Kick Command`)

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Need ``KICK_MEMBERS`` | :x:**");

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**Bot Need ``KICK_MEMBERS`` | :x:**");

    let user = message.mentions.users.first();

    let reason = message.content.split(" ").slice(2).join(" ");

    if (message.mentions.users.size < 1) return message.reply("**Mention Member | :x:**");

    if(!reason) return message.reply ("**Write Reason | :x:**");

    if (!message.guild.member(user)

    .bannable) return message.reply("**Please Give ``Zombie Games`` a High Role | :x:**");

 

    message.guild.member(user).kick(7, user);

 

    const KickEmbed = new Discord.RichEmbed()

          .setColor("RANDOM")

          .setTitle('**Star Army || جيش النجوم**')

          .setDescription(`**Done Kick ${user}

  By ${message.author.username}** `)

          .setAuthor(message.guild.name)

    message.channel.send({

      embed : KickEmbed

    })

  }

  });

 

  client.on('message', message => {  

if (message.author.bot) return;

    if(message.content.startsWith(prefix + 'mute')) {

        console.log(`${message.author.username} Has Ran Mute Command`)

if (!message.channel.guild) return;

if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Need ``MANAGE_MESSAGES`` | :x:**").then(msg => msg.delete(5000));

if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**Bot Need ``MANAGE_MESSAGES`` | :x:**").then(msg => msg.delete(5000));;

let user = message.mentions.users.first();

let muteRole = message.guild.roles.find("name", "Muted");

if (!muteRole) return message.reply("**Please Create Role 'Muted' | :x:**").then(msg => {msg.delete(5000)});

if (message.mentions.users.size < 1) return message.reply('**Mention Member | :x:**').then(msg => {msg.delete(5000)});

let reason = message.content.split(" ").slice(2).join(" ");

message.guild.member(user).addRole(muteRole);

