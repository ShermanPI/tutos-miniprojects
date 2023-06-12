import './app.css';

function timeAgo(time) {
    switch (typeof time) {
        case 'number':
        break;
        case 'string':
        time = +new Date(time);
        break;
        case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
        default:
        time = +new Date();
    }
    var time_formats = [
        [60, 'seconds', 1], // 60
        [120, '1 minute ago', '1 minute'], // 60*2
        [3600, 'minutes', 60], // 60*60, 60
        [7200, '1 hour ago', '1 hour'], // 60*60*2
        [86400, 'hours', 3600], // 60*60*24, 60*60
        [604800, 'days', 86400], // 60*60*24*7, 60*60*24
        [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
        [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
        [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    ];
    var seconds = (+new Date() - time) / 1000,
        token = 'ago',
        list_choice = 1;

    if (seconds == 0) {
        return 'Just now'
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        list_choice = 2;
    }
    var i = 0,
        format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
        if (typeof format[2] == 'string')
            return format[list_choice];
        else
            return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
    return time;
}

export const YoutubeThumbnail = ({videoName, user, totalViews, duration, uploadedDate}) => {
    return(
        <article className="yt-thumnailCard">
            <div className='yt-thumbnailImgContainer'>
                <img src='https://picsum.photos/640/480/?random' />
                <div className='yt-videoDuration'>{duration}</div>
            </div>

            <div className='yt-thumbnailInfoContainer'>
                <div className='yt-thumbnailProfilePicture'>
                    <img src={`https://unavatar.io/${user}`}/>
                </div>
                <div className='yt-thumbnailInfo'>
                    <p className='yt-videoName'> {videoName} </p>
                    <div className='yt-videoStats'>
                        <p>{user}</p>
                        <p>{Number(totalViews).toLocaleString()} views • {timeAgo(new Date(uploadedDate))}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}