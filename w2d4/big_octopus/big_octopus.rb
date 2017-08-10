def sluggish_octopus(fishes)
  biggest = fishes[0]

  fishes.each_index do |i|
    fishes.each_index do |j|
      if i != j
        f1 = fishes[i]
        f2 = fishes[j]
        if f1.length < f2.length
          break
        end
        if i == (fishes.length - 1)
          return fishes[i]
        end
      end
    end
  end
end

def dominant_octopus(fishes)
  fishes.sort_by(&:length)[-1]
end

def clever_octopus(fishes)
  biggest_fish = fishes[0]

  fishes.each do |fish|
    if fish.length > biggest_fish.length
      biggest_fish  = fish
    end
  end
  biggest_fish
end

def slow_dance(dir, tiles_array)
  tiles_array.each_index do |i|
    if dir == tiles_array[i]
      return i
    end
  end
end


new_tiles_data_structure = ["up"=> 0,
   "right-up" => 1,
    "right" => 2,
     "right-down" => 3,
      "down" => 4,
       "left-down" => 5,
        "left" => 6,
          "left-up" => 7 ]
def fast_dance(dir, new_tiles_data_structure)
  new_tiles_data_structure[dir]
end

fast_dance("left-up", new_tiles_data_structure)
