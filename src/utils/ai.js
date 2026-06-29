import aiClient from './aiClient'

// AI聊天
export function aiChat(message) {
    return aiClient.post('/opi/v1/yVZSfGAs', {
        system: 'You are Kico, a friendly and creative AI companion',
        dashScopeMessageDTOList: [
            {
                role: 'user',
                content: message
            }
        ]
    })
}