const help = (prefix) => {
     ----------------------------------
          ALANZIN NE PAI 
	
	  -------------------------
	return `> *Sticker Commands* <
comando : *${prefix}sticker* or *${prefix}stiker*
desc: converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda \ n
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc: converte imagem em adesivo enquanto remove o fundo
uso: responder imagem ou enviar imagem com legenda \ n
comando : *${prefix}toimg*
desc: converter adesivo em imagem
uso: adesivo de resposta \ n
comando : *${prefix}tsticker* or *${prefix}tstiker*
desc: converter texto em adesivo
uso: * $ {prefix} texto tsticker aqui * \ n
> *Meme Commands* <
command : *${prefix}meme*
desc: imagens aleatórias de meme [inglês]
uso: basta enviar o comando \ n
comando : *${prefix}memeindo*
desc: imagens meme aleatórias [indo]
uso: basta enviar o comando \ n
> *Others Commands* <
comando : *${prefix}gtts*
desc : converter texto em fala / áudio
uso: * $ {prefix} gtts [cc] [texto] * \ nexemplo: * $ {prefix} gtts ja On2-chan * \ n
comando : *${prefix}loli*
desc: imagens aleatórias de loli
uso: basta enviar o comando \ n
comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
uso : basta enviar o comando \ n
command : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso : responder imagem ou enviar imagem com legenda \ n
comando : *${prefix}wait*
desc : pesquisar anime com imagem [What Anime Is This / That]
uso : responder imagem ou enviar imagem com legenda \ n
comando : *${prefix}setprefix*
desc : substituir prefixo
uso : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
Nota : Este comando só pode ser usado pelo proprietário do bot \ n
> *Group Comands* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}kick*
desc : chutar membros do grupo
uso : *${prefix}kick @tagmember*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
uso : *${prefix}promote @tagmember*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
uso : *${prefix}demote @tagmember*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
uso : apenas envie o comando
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso : apenas envie o comando
Nota : Este comando pode ser usado se você for um administrador de grupo \ n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
Nota : Este comando pode ser usado se você for um administrador de grupo \ n`
}

exports.help = help
