import { YoutubeThumbnail } from './thumbnail.jsx'
import { Category } from './category.jsx'
import { ArrowNavigation } from './arrow-navigation.jsx'
import { globalVariables } from './assets/global-variables.js'
import './app.css'

export const App = () => {
  return (
    <main className='yt-mainContent'>
      <header className='yt-videoCategoryHeader'>
        <ArrowNavigation direction={globalVariables.left} />

        <div className='yt-categoriesContainer'>
          <Category isFirst>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
          <Category>All</Category>
          <Category>Videogames</Category>
          <Category>Music</Category>
        </div>

        <ArrowNavigation direction={globalVariables.right} />
      </header>
      <section className='yt-thumbnailsGridContainer'>
        <YoutubeThumbnail videoName='Can Exes Be Friends?' user='sherman' duration='4:25' totalViews={1231312} uploadedDate='6/11/2023' />
        <YoutubeThumbnail videoName='Reaction video' user='juan' duration='9:05' totalViews={1231312} uploadedDate='4/11/2023' />
        <YoutubeThumbnail videoName='Reaction video' user='pedro' duration='4:25' totalViews={123543} uploadedDate='1/11/2023' />
        <YoutubeThumbnail videoName='Reaction video' user='gato' duration='6:20' totalViews={87656} uploadedDate='6/11/2022' />
        <YoutubeThumbnail videoName='Reaction video' user='jiro' duration='3:15' totalViews={12323} uploadedDate='3/11/2021' />
        <YoutubeThumbnail videoName='Reaction video' user='ShermanPI' duration='3:12' totalViews={1212} uploadedDate='7/11/2023' />
      </section>
    </main>
  )
}
