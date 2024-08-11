const { Telegraf } = require('telegraf')
const bot = new Telegraf('7262817179:AAGVEGxFa7tz3x1M9y4X1nRdhSJATZX0ZF0')

bot.command('start', ctx => {
	ctx.reply('Привет! Открой мини-приложение, нажав на кнопку ниже.', {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: 'Открыть приложение',
						web_app: { url: 'https://your-webapp-url.com' },
					},
				],
			],
		},
	})
})

bot.launch()
