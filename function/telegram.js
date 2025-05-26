const { callGeminiAPI } = require('./gemini');

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// Contoh perintah /start
bot.start(ctx => ctx.reply('Selamat datang! Kirim /gemini <pertanyaan> untuk memulai.'));

// Menangani perintah /gemini
bot.command('gemini', async ctx => {
  const input = ctx.message.text.split(' ').slice(1).join(' ');
  if (!input) return ctx.reply('Tolong sertakan pertanyaan.');
  // Panggil Gemini API (akan dibahas selanjutnya)
  const response = await callGeminiAPI(input);
  ctx.reply(response);
});

// Jalankan bot sebagai serverless function
module.exports = async (req, res) => {
  await bot.handleUpdate(req.body, res);
  res.status(200).send('OK');
};
