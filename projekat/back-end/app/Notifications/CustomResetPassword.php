<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CustomResetPassword extends Notification
{
    use Queueable;

    protected $token; 

    /**
     * Create a new notification instance.
     */
    public function __construct($token)
    {
    $this->token = $token;
    }   

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
    {
        $frontendUrl = 'http://localhost:3000/reset-password';

        return (new MailMessage)
            ->subject('Resetuj lozinku')
            ->line('Zahtev za reset lozinke je primljen.')
            ->action(
                'Resetuj lozinku',
                "{$frontendUrl}?token={$this->token}&email=" . urlencode($notifiable->getEmailForPasswordReset())
            )
            ->line('Ako nisi tražio reset lozinke, ignoriši ovaj mejl.')
            ->line("Ovaj link važi {$expire} minuta.");
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
