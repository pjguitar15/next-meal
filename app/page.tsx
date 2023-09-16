import Categories from '@/components/categories/Categories'
import CategoriesTest from '@/components/categories/CategoriesTest'
import HeroSection from '@/components/homepage-sections/HeroSection'

export default async function Home() {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  )
  const res = await data.json()

  return (
    <main>
      <HeroSection />
      <Categories allCategories={res.categories} />
      {/* <CategoriesTest /> */}
    </main>
  )
}
