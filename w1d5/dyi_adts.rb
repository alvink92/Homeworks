class Stack
  def initialize
    @stack = []
  end

  def add(el)
    # adds an element to the stack
    @stack << el
  end

  def remove
    # removes one element from the stack
    @stack.pop
  end

  def show
    # return a copy of the stack
    stack_cp = self.new
    @stack.each {|el| stack_cp.add(el)}
    stack_cp
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    ret = @queue[0]
    @queue = @queue[1..-1]
    ret
  end

  def show
    queue_cp = self.new
    @queue.each {|el| queue_cp.enqueue(el)}
    queue_cp
  end
end

class Map

  def initialize
    @map = []
  end

  def assign(key,value)
    (0...@map.length).each do |i|
      if @map[i][0] == key
        @map[i][1] = value
        return
      end
    end
    @map << [key, value]
  end

  def lookup(key)
    @map.each do |kv|
      k,v = kv
      return v if k == key
    end
    return nil
  end

  def show
    map_cp = self.new
    @map.each {|el| map_cp.asign(el[0], el[1])}
    map_cp
  end
end
