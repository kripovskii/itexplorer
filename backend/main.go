package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
)

// Обновите значения для Telegram
const (
	TelegramToken  = "6107148761:AAFK3JqdYrI8IbCGLGPOYyRHfbVlaWBfu64"
	TelegramChatID = "983014752"
)

// Структура для хранения данных из формы
type FormData struct {
	Name     string `json:"name"`
	Phone    string `json:"phone"`
	Email    string `json:"email"`
	Question string `json:"question"`
}

func main() {
	// Установка обработчика для маршрута /api/submit-form
	http.HandleFunc("/api/submit-form", submitFormHandler)

	// Запуск HTTP сервера на порту 8080
	log.Println("Starting server on port 8080...")
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal(err)
	}
}

func submitFormHandler(w http.ResponseWriter, r *http.Request) {
	// Разбор данных из тела запроса в структуру FormData
	formData := FormData{}
	err := json.NewDecoder(r.Body).Decode(&formData)
	if err != nil {
		log.Println("Error decoding form data:", err)
		http.Error(w, "Bad Request", http.StatusBadRequest)
		return
	}

	// Отправка сообщения в Telegram
	err = sendTelegramMessage(formData)
	if err != nil {
		log.Println("Error sending Telegram message:", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Отправка успешного ответа
	w.WriteHeader(http.StatusOK)
}

func sendTelegramMessage(formData FormData) error {
	// Формирование текста сообщения
	message := fmt.Sprintf("Новое сообщение с формы:\n\nИмя: %s\nТелефон: %s\nEmail: %s\nВопрос: %s",
		formData.Name, formData.Phone, formData.Email, formData.Question)

	// Отправка сообщения в Telegram через Bot API
	url := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage?chat_id=%s&text=%s",
		TelegramToken, TelegramChatID, url.QueryEscape(message))
	_, err := http.Get(url)
	if err != nil {
		return err
	}

	return nil
}
