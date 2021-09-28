using LetsChat.Api.Hubs.Clients;
using LetsChat.Api.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LetsChat.Api.Hubs
{
    public class LetsChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(ChatMessage msg)
        {
            await Clients.All.ReceiveMessage(msg);
        }
    }
}
